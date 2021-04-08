const User = require("./models").user;

async function listUser() {
  try {
    const user = await User.findByPk(1);

    if (user.isNutritionist) {
      const fullUser = await User.findByPk(1, {
        include: [{ model: User, as: "doctor" }],
      });
      console.log("doctor with patients", fullUser.toJSON());
    } else {
      const fullUser = await User.findByPk(1, {
        include: [{ model: User, as: "patient" }],
      });
      console.log("patient with doctor", fullUser.toJSON());
    }
  } catch (e) {
    console.log(e);
  }
}
listUser();
