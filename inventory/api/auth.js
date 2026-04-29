export default function handler(req, res) {
  const { code } = req.query;
  const inputCode = String(code || "").trim();
  
  const VALID_CODES = ["SUPER2026", "G2025", "FAST888"];
  const isValid = VALID_CODES.includes(inputCode);
  
  if (isValid) {
    res.status(200).json({ valid: true, message: "验证通过" });
  } else {
    res.status(403).json({ valid: false, message: "使用码无效" });
  }
}