const ipHits = new Map();

function rateLimit({ maxRequests = 20, windowMs = 60000 } = {}) {
  return (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const clientData = ipHits.get(ip) || { count: 0, resetTime: now + windowMs };

    if (now > clientData.resetTime) {
      clientData.count = 0;
      clientData.resetTime = now + windowMs;
    }

    clientData.count++;
    ipHits.set(ip, clientData);

    if (clientData.count > maxRequests) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please wait a minute or contact directly via WhatsApp.'
      });
    }

    next();
  };
}

module.exports = rateLimit;
