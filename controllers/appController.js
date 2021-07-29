class AppController {
  static dashboard(req, res, next) {
    res.status(200).json({ name: "boy" });
  }
}

module.exports = AppController;
