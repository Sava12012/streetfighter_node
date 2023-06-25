const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  res.success = (data) => {
    res.status(200).json(data);
  };

  res.badRequest = (errorMessage) => {
    res.status(400).json({ error: errorMessage });
  };

  res.notFound = (errorMessage) => {
    res.status(404).json({ error: true, message: errorMessage });
  };

  res.error = (errorMessage) => {
    res.status(500).json({ error: errorMessage });
  };
  next();
};

export { responseMiddleware };
