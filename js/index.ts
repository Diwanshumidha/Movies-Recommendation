import { Client } from "@elastic/elasticsearch";

const client = new Client({
  node: "http://localhost:9200",
});

async function checkClient() {
  try {
    const body = await client.cluster.health();
    console.log(body);
  } catch (error) {
    console.error("Elasticsearch client error:", error);
  }
}

checkClient();
