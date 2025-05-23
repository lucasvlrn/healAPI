const app = require("./config/utils");
require("dotenv").config();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server running on port ${port} 🚀`);
});
