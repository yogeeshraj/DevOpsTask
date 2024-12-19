exports.handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));
  return "Lambda function executed successfully!";
};
