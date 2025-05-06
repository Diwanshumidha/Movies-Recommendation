export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type FetchPage<T> = (page: number) => Promise<{ response: T; totalPages: number }>;

export async function fetchAllPaginated<T>(
  fetchPage: FetchPage<T>,
  {
    onReceive,
    rateLimitPerSecond = 5,
    startPage,
    endPage,
  }: {
    onReceive?: (data: T) => void;
    rateLimitPerSecond?: number;
    startPage?: number;
    endPage?: number;
  } = {},
): Promise<{ success: true }> {
  let currentPage = startPage || 1;
  let hasMorePages = true;

  const minDelayMs = 1000 / rateLimitPerSecond;
  let lastRequestTime = 0;

  while (hasMorePages) {
    const now = Date.now();
    const elapsed = now - lastRequestTime;

    if (elapsed < minDelayMs && lastRequestTime !== 0) {
      await delay(minDelayMs - elapsed);
    }

    lastRequestTime = Date.now();

    const { response, totalPages } = await fetchPage(currentPage);

    onReceive?.(response);

    const isLastPageByAPI = currentPage >= totalPages;
    const isLastPageByUser = endPage !== undefined && currentPage >= endPage;

    if (isLastPageByAPI || isLastPageByUser) {
      hasMorePages = false;
    } else {
      currentPage++;
    }
  }

  return { success: true };
}
