const { TableClient } = require("@azure/data-tables");
const serviceClient = TableClient.fromConnectionString(
  "DefaultEndpointsProtocol=https;AccountName=nhom4mxhcosmosdb;AccountKey=dqgVn2VrvfHbJ1ViGepIw0rh0nXE9aLusxkJjYCUgpjtqSyESl1eJ1jYokgKxwsZwuC6iEIAH91HACDb0HBNBw==;TableEndpoint=https://nhom4mxhcosmosdb.table.cosmos.azure.com:443/;",
  "ResultTable"
);

const filterEntities = async function (option) {
  /*
    You can query data according to existing fields
    option provides some conditions to query,eg partitionKey, rowKeyDateTimeStart, rowKeyDateTimeEnd
    minTemperature, maxTemperature, minPrecipitation, maxPrecipitation
  */
  const filterEntitiesArray = [];
  const filters = [];
  if (option.partitionKey) {
    filters.push(`PartitionKey eq '${option.partitionKey}'`);
  }
  if (option.UserID) {
    filters.push(`UserID eq '${option.UserID}'`);
  }
  const entities = serviceClient.listEntities({
    queryOptions: {
      filter: filters.join(" and "),
    },
  });
  for await (const entity of entities) {
    filterEntitiesArray.push(entity);
  }

  return filterEntitiesArray;
};

const tableClient = {
  client: serviceClient,
  filterEntities,
};

module.exports = tableClient;
