class Logger {
  constructor(id) {
    this.id = id;
  }

  log(message, result) {
    let id = this.id;
    let log = {
      message: message ? message : "No message sent",
      result: result,
      id: id,
    };
    console.log(log);
  }
}

export default Logger;
