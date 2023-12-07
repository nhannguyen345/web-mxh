const express = require("express");
const app = express();
const connectDB = require("./src/config/connectDb");
const cors = require("cors");
const usersRouter = require("./src/router/users");
const usersLinkRouter = require("./src/router/usersLink");
var tableClient = require("./src/config/tableClient");

// Cho phép tất cả các miền truy cập
app.use(cors({ origin: "*" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/api", usersRouter);
app.use("/api/link", usersLinkRouter);

app.post("/getFilteredRows", async function (req, res) {
  try {
    const queryOptions = { ...req.body };

    if (queryOptions.UserID && typeof queryOptions.UserID === "bigint") {
      queryOptions.UserID = queryOptions.UserID.toString();
    }

    let filterEntities = await tableClient.filterEntities(queryOptions);
    console.log(filterEntities);
    const AvatarUsers = [
      {
        avatarUrl:
          "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        avatarUrl:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        avatarUrl:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        avatarUrl:
          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        avatarUrl:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        avatarUrl:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        avatarUrl:
          "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        avatarUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      // ... more users
    ];
    // Convert BigInt values to strings
    filterEntities = filterEntities.map((ele, index) => {
      ele.UserAgeFrom = ele.UserAgeFrom.toString();
      ele.UserAgeTo = ele.UserAgeTo.toString();
      ele.avatarUrl = AvatarUsers[index].avatarUrl;
      return ele;
    });
    res.send({ entitiesList: filterEntities });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).send({ msg: error.message });
  }
});

app.use("/", (req, res) => {
  console.log("Xin chào");
  res.json({ message: "Hi bro!" });
});

app.listen(3002, async () => {
  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
  }
  console.log(`http://localhost:3002/`);
});
