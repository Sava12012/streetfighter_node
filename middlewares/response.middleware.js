const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  res.success = (data) => {
    res.status(200).json(data);
  };

  res.badRequest = (message) => {
    res.status(400).json({ error: message });
  };

  res.notFound = (message) => {
    res.status(404).json({ error: true, message: message });
  };

  res.error = (message) => {
    res.status(500).json({ error: message });
  };
  next();
};

export { responseMiddleware };
