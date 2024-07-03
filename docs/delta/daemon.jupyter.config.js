module.exports = {
  apps : [{
    name: "jupyter",
    script: "/home/lambda/Python/bin/jupyter",
    args: "notebook",
    interpreter: "/home/lambda/Python/bin/python"
  }]
}

