module.exports = function makeArrayOfItems(status) {
    return {
      data: {
        items: [{ name: "thanh", age: 10 }, { name: "cong", age: 20 }]
      },
      status: status
    };
  }