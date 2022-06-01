let id = '';
export default function home(req, res) {
  id += ' ' + req.body.id; // for example const a = req.body.a
  res.status(200).json(id);
}
