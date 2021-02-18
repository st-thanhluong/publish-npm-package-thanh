const  helloWorld = (status) => {
    return {
      data: {
        items: [{ name: "thanh", age: 10 }, { name: "cong", age: 20 }]
      },
      status: status
    };
  }

  export default helloWorld;