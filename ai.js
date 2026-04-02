// Neon Edge: Cyber-Strengthening - AI Integration
const GEMINI_API_KEY = typeof SECRETS !== 'undefined' ? SECRETS.GEMINI_API_KEY : ""; 

async function getAIResponse(type, level, data = {}) {
    if (!GEMINI_API_KEY || GEMINI_API_KEY.includes("YOUR_")) return null;

    let prompt = "";
    if (type === "enhance_success") {
        prompt = `당신은 사이버펑크 도시의 암시장 터미널 해커입니다. 사용자가 '${data.name || '무기'}'를 ${level} 레벨로 강화하는 데 성공했습니다. 짧고 몰입감 있는 한 문장의 반응을 한국어로 해주세요. (예: "네온 빛이 눈이 부시군요... 당신의 검날이 기업의 법보다 날카롭습니다.")`;
    } else if (type === "hack_event") {
        prompt = `당신은 사이버펑크 뉴스 방송입니다. '네온 엣지' 도시에서 방금 발생한 아주 짧은(한 문장) 무작위 해킹 사건이나 기업 스캔들을 한국어로 묘사해주세요. 레벨: ${level}.`;
    } else if (type === "weapon_mutation") {
        prompt = `당신은 사이버펑크 암시장 장비 딜러입니다. 사용자의 무기가 레벨 ${level}에서 파괴되어 '${data.name}'(으)로 변이되었습니다. 짧고 비꼬는 듯하거나 몰입감 있는 한 문장의 반응을 한국어로 해주세요.`;
    }

    try {
        // Using v1 endpoint and gemini-1.5-flash model
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            const errData = await response.json();
            console.error("Gemini API Error Details:", errData);
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text.trim();
        }
        return null;
    } catch (err) {
        console.warn("AI Integration error:", err);
        return null;
    }
}
