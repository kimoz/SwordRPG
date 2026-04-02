const CONFIG = {
    BASE_ENHANCE_COST: 100,
    HACK_XP: 25,
    PROB_TABLE: [
        { success: 1.00, maintain: 0.00, destroy: 0.00 }, // 0->1
        { success: 0.90, maintain: 0.10, destroy: 0.00 }, // 1->2
        { success: 0.80, maintain: 0.20, destroy: 0.00 }, // 2->3
        { success: 0.70, maintain: 0.28, destroy: 0.02 }, // 3->4
        { success: 0.60, maintain: 0.35, destroy: 0.05 }, // 4->5
        { success: 0.50, maintain: 0.40, destroy: 0.10 }, // 5->6
        { success: 0.45, maintain: 0.45, destroy: 0.10 }, // 6->7
        { success: 0.40, maintain: 0.50, destroy: 0.10 }, // 7->8
        { success: 0.35, maintain: 0.55, destroy: 0.10 }, // 8->9
        { success: 0.30, maintain: 0.60, destroy: 0.10 }, // 9->10
        { success: 0.25, maintain: 0.65, destroy: 0.10 }, // 10->11
        { success: 0.22, maintain: 0.68, destroy: 0.10 }, // 11->12
        { success: 0.20, maintain: 0.70, destroy: 0.10 }, // 12->13
        { success: 0.18, maintain: 0.72, destroy: 0.10 }, // 13->14
        { success: 0.15, maintain: 0.75, destroy: 0.10 }, // 14->15
        { success: 0.12, maintain: 0.78, destroy: 0.10 }, // 15->16
        { success: 0.10, maintain: 0.80, destroy: 0.10 }, // 16->17
        { success: 0.08, maintain: 0.82, destroy: 0.10 }, // 17->18
        { success: 0.06, maintain: 0.84, destroy: 0.10 }, // 18->19
        { success: 0.04, maintain: 0.85, destroy: 0.11 }  // 19->20
    ],
    HACK_REWARD: 50,
    WEAPONS_DATA: [
        { id: 0, name: "Glitch God", color: "#ff00ff", hue: 315, description: "시스템 오류의 집합체가 신의 형상을 띈 것", hidden: true, image: "assets/blade_10.png" },
        { id: 1, name: "Phantom Data", color: "#aaaaff", hue: 230, description: "존재하지만 실존하지 않는 허상의 데이터 결합", hidden: true, image: "assets/blade_11.png" },
        { id: 2, name: "Lost Sector", color: "#444400", hue: 60, description: "파티션 테이블에서 삭제된 잊혀진 구역의 파편", hidden: true, image: "assets/blade_12.png" },
        { id: 3, name: "Encrypted Core", color: "#ffaaaa", hue: 0, description: "복호화할 수 없는 강력한 암호로 둘러싸인 광채", hidden: true, image: "assets/blade_13.png" },
        { id: 4, name: "System Proxy", color: "#0000ff", hue: 240, description: "시스템의 대리인으로서 모든 명령을 수행함", hidden: true, image: "assets/blade_14.png" },
        { id: 5, name: "Stack Trace", color: "#0000ff", hue: 240, description: "과거의 모든 공격 궤적을 추적하는 기능", hidden: true, image: "assets/blade_5.png" },
        { id: 6, name: "Infinite Loop", color: "#ffff00", hue: 60, description: "영원히 반복되는 절단의 굴레", hidden: true, image: "assets/blade_6.png" },
        { id: 7, name: "Segmentation Fault", color: "#ff00ff", hue: 300, description: "허가되지 않은 영역을 베려 할 때 발생하는 오류", hidden: true, image: "assets/blade_7.png" },
        { id: 8, name: "Kernel Panic", color: "#ff4500", hue: 15, description: "시스템의 핵심을 마비시키는 치명적인 공포", hidden: true, image: "assets/blade_8.png" },
        { id: 9, name: "Bit Flip", color: "#00ffff", hue: 180, description: "단 한 비트의 반전으로 결과를 뒤집는 검", hidden: true, image: "assets/blade_9.png" },
        { id: 10, name: "Developer's Authority", color: "#ff00ff", hue: 300, description: "세상을 창조한 자들의 허가된 권능", hidden: true, image: "assets/blade_10.png" },
        { id: 11, name: "Source Code", color: "#00ff00", hue: 120, description: "모든 사물의 본질이 적힌 태초의 코드", hidden: true, image: "assets/blade_11.png" },
        { id: 12, name: "Root Access", color: "#ffffff", hue: 0, description: "관리자 권한을 획득하여 무적에 가까운 힘 발휘", hidden: true, image: "assets/blade_12.png" },
        { id: 13, name: "Admin's Wrath", color: "#ff0000", hue: 0, description: "운영자의 분노가 실린 가차 없는 심판", hidden: true, image: "assets/blade_13.png" },
        { id: 14, name: "Reality Patch", color: "#33ccff", hue: 200, description: "불합리한 현실을 직접 수정하는 칼날", hidden: true, image: "assets/blade_14.png" },
        { id: 15, name: "Simulation Break", color: "#ffffff", hue: 0, description: "이 세상이 가상임을 깨닫고 벽을 부수는 검", hidden: true, image: "assets/blade_15.png" },
        { id: 16, name: "Eternal Sync", color: "#fbaf5d", hue: 35, description: "그리드와 완벽하게 동기화된 영원의 조율", hidden: true, image: "assets/blade_16.png" },
        { id: 17, name: "Void Heart", color: "#4b0082", hue: 270, description: "공허의 가장 깊은 곳에서 태어난 심장", hidden: true, image: "assets/blade_17.png" },
        { id: 18, name: "Celestial Core", color: "#87ceeb", hue: 200, description: "천상의 에너지가 집약된 순수 데이터", hidden: true, image: "assets/blade_18.png" },
        { id: 19, name: "The Absolute", color: "#ffffff", hue: 0, description: "더 이상의 수식어가 필요 없는 절대적인 존재", hidden: true, image: "assets/blade_19.png" },

        { id: 20, name: "Neural Spike", color: "#8000ff", hue: 280, description: "신경계에 직접 간섭하는 보라색 데이터 송곳", image: "assets/blade_0.png" },
        { id: 21, name: "Carbon Edge", color: "#444444", hue: 0, description: "경량화된 탄소 섬유로 제작된 보급형 검", image: "assets/blade_1.png" },
        { id: 22, name: "Plasma Ripper", color: "#ff8800", hue: 30, description: "고온의 플라즈마로 장갑을 녹여버리는 톱날", image: "assets/blade_2.png" },
        { id: 23, name: "Neon Katana", color: "#00ffff", hue: 180, description: "밤거리를 가르는 눈부신 청록색 광채", image: "assets/blade_3.png" },
        { id: 24, name: "Alloy Gladius", color: "#888888", hue: 0, description: "구식 강철과 신소재가 결합된 튼튼한 무기", image: "assets/blade_4.png" },
        { id: 25, name: "Sonic Cutter", color: "#1e90ff", hue: 200, description: "초음파 진동으로 원자 단위의 정밀한 절단을 수행", image: "assets/blade_5.png" },
        { id: 26, name: "Bio-Hazard", color: "#00ff00", hue: 120, description: "부식성 바이러스 데이터를 주입받은 위험한 칼날", image: "assets/blade_6.png" },
        { id: 27, name: "Heat Blade", color: "#ff0000", hue: 0, description: "임계 온도까지 가열되어 붉게 달아오른 검", image: "assets/blade_7.png" },
        { id: 28, name: "Digital Needle", color: "#ffc0cb", hue: 330, description: "방화벽의 미세한 틈새를 뚫고 들어가는 침", image: "assets/blade_8.png" },
        { id: 29, name: "Volt Rapier", color: "#ffff00", hue: 60, description: "고압 전류가 흐르는 찌르기 전용 무기", image: "assets/blade_9.png" },
        { id: 30, name: "Quantum Falchion", color: "#4b0082", hue: 260, description: "중첩된 상태에서 적을 타격하는 양자 검", image: "assets/blade_10.png" },
        { id: 31, name: "Cryo Scimitar", color: "#add8e6", hue: 190, description: "절대 영도에 가까운 냉기로 적을 동결", image: "assets/blade_11.png" },
        { id: 32, name: "Gravity Mace", color: "#000000", hue: 0, description: "자체적인 중력장을 생성하여 압살하는 둔기", image: "assets/blade_12.png" },
        { id: 33, name: "Flash Sabre", color: "#ffffff", hue: 0, description: "눈을 멀게 하는 강렬한 백색광의 세이버", image: "assets/blade_13.png" },
        { id: 34, name: "Nano Blade", color: "#008080", hue: 170, description: "나노 머신이 실시간으로 칼날을 복구하는 무기", image: "assets/blade_14.png" },
        { id: 35, name: "Pulse Dagger", color: "#ff00ff", hue: 300, description: "전자기 펄스를 방출하여 기계 장치를 무력화", image: "assets/blade_15.png" },
        { id: 36, name: "Laser Claymore", color: "#ff4500", hue: 20, description: "거대한 레이저 출력을 가진 대형 검", image: "assets/blade_16.png" },
        { id: 37, name: "Orbit Blade", color: "#00bfff", hue: 210, description: "위성 통신과 연결되어 정밀 타격 궤적을 제공", image: "assets/blade_17.png" },
        { id: 38, name: "Iron Will", color: "#666666", hue: 0, description: "결코 꺾이지 않는 강철의 의지", image: "assets/blade_18.png" },
        { id: 39, name: "Ghost Data", color: "#cccccc", hue: 0, description: "실체가 불분명한 유령 데이터 조각", image: "assets/blade_19.png" },
        { id: 40, name: "Cyber-Edge", color: "#00ffcc", hue: 160, description: "그리드 환경에 최적화된 고속 절단기", image: "assets/blade_0.png" },
        { id: 41, name: "Neural-Link", color: "#ff0088", hue: 320, description: "사용자의 뇌파와 직접 동기화되는 신경 검", image: "assets/blade_1.png" },
        { id: 42, name: "Data-Seeker", color: "#ffff88", hue: 50, description: "숨겨진 정보 패킷을 찾아내는 탐지 도구", image: "assets/blade_2.png" },
        { id: 43, name: "Logic-Breaker", color: "#88ff00", hue: 90, description: "모순된 연산을 강제로 주입하여 적을 무력화", image: "assets/blade_3.png" },
        { id: 44, name: "Vector-Edge", color: "#ff88ff", hue: 310, description: "물리적 궤적을 벡터로 계산하여 보정하는 칼", image: "assets/blade_4.png" },
        { id: 45, name: "Grid-Runner", color: "#88ffff", hue: 180, description: "네트워크 그리드 위를 미끄러지듯 이동하는 블레이드", image: "assets/blade_5.png" },
        { id: 46, name: "Protocol-Zero", color: "#000000", hue: 0, description: "모든 통신 프로토콜을 초기화하는 침묵의 검", image: "assets/blade_6.png" },
        { id: 47, name: "Shell-Cracker", color: "#ffaa00", hue: 40, description: "두꺼운 장갑 프로토콜을 파괴하는 크래킹 툴", image: "assets/blade_7.png" },
        { id: 48, name: "Binary-Cutter", color: "#ffffff", hue: 0, description: "0과 1의 논리적 결합을 끊어내는 무기", image: "assets/blade_8.png" },
        { id: 49, name: "Hex-Ripper", color: "#9900ff", hue: 270, description: "16진수 코드를 갈기갈기 찢어버리는 파괴 도구", image: "assets/blade_9.png" },
        { id: 50, name: "System-Slayer", color: "#ff0055", hue: 340, description: "중앙 관리국 시스템에 대적하기 위해 설계된 무기", image: "assets/blade_10.png" },
        { id: 51, name: "Buffer-Overload", color: "#ffbb00", hue: 45, description: "정보 과부하를 유도하여 타켓을 마비시키는 검", image: "assets/blade_11.png" },
        { id: 52, name: "Packet-Sniffer", color: "#00ff77", hue: 140, description: "공중을 떠도는 데이터 패킷을 실체화한 날카로운 검", image: "assets/blade_12.png" },
        { id: 53, name: "Firewall-Pierce", color: "#ff4400", hue: 15, description: "철통같은 보안벽을 단번에 관통하는 붉은 바늘", image: "assets/blade_13.png" },
        { id: 54, name: "Proxy-Strike", color: "#4400ff", hue: 250, description: "공격의 위치를 숨기고 허상을 통해 타격", image: "assets/blade_14.png" },
        { id: 55, name: "Gateway-Key", color: "#eeff00", hue: 65, description: "차단된 게이트웨이를 강제로 여는 황금빛 열쇠검", image: "assets/blade_15.png" },
        { id: 56, name: "Node-Sever", color: "#ff00ff", hue: 300, description: "네트워크 노드 사이의 연결 고리를 영구히 절단", image: "assets/blade_16.png" },
        { id: 57, name: "Cluster-Bomb", color: "#0088ff", hue: 215, description: "타격 지점에서 데이터 잔해가 폭발하는 특수 블레이드", image: "assets/blade_17.png" },
        { id: 58, name: "Memory-Leak", color: "#88ffcc", hue: 165, description: "적의 메모리 자원을 지속적으로 흡수하는 푸른 칼날", image: "assets/blade_18.png" },
        { id: 59, name: "Thread-Killer", color: "#ff5555", hue: 0, description: "실행 중인 모든 위협 스레드를 즉시 종료", image: "assets/blade_19.png" },
        { id: 60, name: "Core-Refactor", color: "#00eeff", hue: 195, description: "사물의 핵심 코드를 재설계하여 무해하게 만드는 검", image: "assets/blade_0.png" },
        { id: 61, name: "Registry-Edit", color: "#ff00aa", hue: 325, description: "세계의 등록 정보를 직접 수정하는 권능의 일부", image: "assets/blade_1.png" },
        { id: 62, name: "Cache-Burst", color: "#ffcc00", hue: 55, description: "축적된 에너지를 한꺼번에 방출하는 폭발적인 검", image: "assets/blade_2.png" },
        { id: 63, name: "Stack-Smash", color: "#99ff00", hue: 95, description: "구조의 가장 아래쪽을 타격하여 전체를 붕괴시킴", image: "assets/blade_3.png" },
        { id: 64, name: "Heap-Overflow", color: "#00ff99", hue: 150, description: "할당된 공간을 넘쳐흐르는 무한한 데이터의 형상", image: "assets/blade_4.png" },
        { id: 65, name: "Runtime-Error", color: "#ff0033", hue: 350, description: "예외 상황을 강제로 발생시키는 결함 있는 날카로움", image: "assets/blade_5.png" },
        { id: 66, name: "Debug-Point", color: "#ffff00", hue: 60, description: "현실을 멈추고 약점을 파헤치는 중단점", image: "assets/blade_6.png" },
        { id: 67, name: "Break-Continue", color: "#8888ff", hue: 240, description: "흐름을 끊거나 강제로 지속시키는 조율의 칼날", image: "assets/blade_7.png" },
        { id: 68, name: "Null-Pointer", color: "#333333", hue: 0, description: "존재하지 않는 곳을 가리키는 허무의 점지", image: "assets/blade_8.png" },
        { id: 69, name: "Garbage-Collector", color: "#66ff66", hue: 125, description: "불필요한 데이터를 정리하여 소멸시키는 칼", image: "assets/blade_9.png" }
    ],
    EPIC_LOGS: {
        SUCCESS: [
            "이 블레이드는 더 이상 강철의 결합체가 아니다. 인과율을 베어내는 차원의 틈새 그 자체이며, 칼날의 형상을 빌린 무한한 의지만이 존재할 뿐.",
            "칼날의 진동이 시공간을 감싸는 우주와 공명한다. 모든 존재의 시작과 끝을 관장하는 절대적 섭리가 이 무기에 깃들었음을 선포한다.",
            "데이터의 흐름조차 멈추게 만드는 절대적 규격. 당신의 손에 들린 것은 무기가 아니라, 현실을 재정의하는 디지털 신지학의 결정체다.",
            "0과 1의 한계를 초월한 승천. 이제 이 칼날이 닿는 모든 곳은 새로운 현실로 재창조될 것이며, 우주는 그 위대한 광채 앞에 침묵한다.",
            "블레이드의 차가운 심장이 박동하며 기계적 승리를 노래한다. 이것은 도구의 진화가 아닌, 존재론적 위계의 전복이다."
        ],
        MAINTAIN: [
            "데이터의 흐름이 잠시 멈추었으나, 그 침묵은 붕괴가 아닌 성숙을 위한 심연의 관찰이다. 블레이드는 여전히 당신의 운명을 응시한다.",
            "우주의 섭리가 잠시 당신의 야망을 시험한다. 칼날은 변하지 않았으나, 그 침묵 속에 감춰진 잠재력은 더욱 날카로워질 뿐.",
            "완벽으로 향하는 길은 결코 직선이 아니다. 데이터 패킷의 소용돌이 속에서 당신의 블레이드는 다시 한번 승천의 기회를 엿보고 있다.",
            "정체은 곧 연마다. 칼날의 표면을 흐르는 네온 광채는 고요함 속에서 찰나의 폭발을 준비하며 시공간의 허락을 기다린다.",
            "거대한 변혁 전의 고요함. 시스템은 당신의 열망을 기록했고, 블레이드는 다음 차원으로 넘어가기 위한 완벽한 정렬을 유지한다."
        ],
        DESTROY: [
            "우주는 완벽함을 거부했다. 한 시대를 풍미했던 데이터의 폭풍은 이제 싸늘한 디지털 먼지가 되어 네온 거리의 소음 속으로 흩어진다.",
            "존재의 소멸은 끝이 아닌, 거대한 그리드로의 회귀다. 블레이드가 존재했던 자리에 남겨진 공허한 잔상만이 당신의 기억을 자극한다.",
            "인과율의 가혹한 심판. 한때 세상을 베어낼 듯 빛나던 칼날은 이제 인과 관계의 틈새로 빠져나가 무(無)의 바다로 침잠한다.",
            "시스템 붕괴. 현실의 벽을 넘으려던 야망은 가루가 되어 사라졌으나, 그 파괴의 흔적은 다음 블레이드를 위한 영양분이 될 것이다.",
            "디지털 황혼이 내린다. 블레이드에 깃들었던 의지는 육신을 잃었으나, 언더시티의 전선 사이로 흐르는 전류는 여전히 그 이름을 기억하리라."
        ]
    },
    ENHANCE_COSTS: [0, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 30000, 50000, 70000, 100000, 150000, 200000, 300000, 500000],
    SELL_DATA: {
        1: [8, 11], 2: [26, 36], 3: [87, 111], 4: [232, 260], 5: [560, 729],
        6: [1569, 1813], 7: [4228, 4800], 8: [9406, 11182], 9: [29659, 31469], 10: [71286, 81492],
        11: [183984, 222218], 12: [380956, 426675], 13: [728057, 970860], 14: [1511653, 1630065], 15: [3009357, 3598922],
        16: [6365485, 7100000], 17: [14792793, 16200000], 18: [34331270, 37500000], 19: [99417283, 110000000], 20: [365335935, 385899461]
    }
};

let gameState = {
    playerName: "CYBER_RUNNER_01",
    squadCode: null,
    credits: 0,
    currentWeaponIndex: 0,
    currentLevel: 0,
    xp: 0,
    pityStack: 0,
    codex: {},
    lastHackDate: null,
    stats: {
        totalEnhanceAttempts: 0,
        totalEnhanceSuccess: 0,
        totalDestructions: 0,
        totalHacks: 0,
        totalSells: 0,
        totalCreditsEarned: 0,
        maxCreditsHeld: 0,
        totalMutations: 0
    },
    unlockedAchievements: [],
    claimedMilestones: [],
    permanentProbBonus: 0
};

// --- Firebase Initialization ---
let database = null;
let rankingListener = null;

function initFirebase() {
    if (typeof firebase === "undefined" || !firebaseConfig || firebaseConfig.apiKey === "YOUR_API_KEY") {
        console.warn("Firebase not configured. Using local mode.");
        return;
    }
    try {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        console.log("Firebase Connected: Local runner data ready to sync.");
    } catch (e) {
        console.error("Firebase Init Error:", e);
    }
}

function updateServerScore() {
    if (!database || !gameState.squadCode) return;
    const path = `squads/${gameState.squadCode}/${gameState.playerName.replace(/\./g, '_')}`;
    database.ref(path).set({
        name: gameState.playerName,
        level: gameState.currentLevel,
        credits: gameState.credits,
        lastUpdated: Date.now()
    }).catch(e => console.warn("Score Sync Error:", e));
}

const ACHIEVEMENTS_DATA = [];

function generateAchievements() {
    const enhanceTiers = [1, 10, 50, 100, 250, 500, 1000, 2500, 5000, 10000];
    enhanceTiers.forEach((t, i) => {
        ACHIEVEMENTS_DATA.push({
            id: `enhancer_${i}`,
            category: 'enhance',
            title: `강화의 길 ${i+1}`,
            desc: `강화 시도를 총 ${t}회 달성하십시오.`,
            requirement: t,
            reward: t * 1000,
            check: (gs) => gs.stats.totalEnhanceAttempts >= t
        });
    });

    for(let lv=1; lv<=20; lv++) {
        ACHIEVEMENTS_DATA.push({
            id: `lv_break_${lv}`,
            category: 'level',
            title: `한계 돌파: +${lv}`,
            desc: `무기를 +${lv}강까지 강화하십시오.`,
            requirement: lv,
            reward: lv * 50000,
            check: (gs) => gs.codex[gs.currentWeaponIndex]?.maxLevel >= lv
        });
    }

    const hackTiers = [1, 5, 10, 25, 50, 100, 250, 500, 1000, 2500];
    hackTiers.forEach((t, i) => {
        ACHIEVEMENTS_DATA.push({
            id: `hacker_${i}`,
            category: 'hack',
            title: `데이터 브레이커 ${i+1}`,
            desc: `해킹을 총 ${t}회 성공하십시오.`,
            requirement: t,
            reward: t * 10000,
            check: (gs) => gs.stats.totalHacks >= t
        });
    });

    const wealthTiers = [100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000, 500000000, 1000000000, 10000000000];
    wealthTiers.forEach((t, i) => {
        ACHIEVEMENTS_DATA.push({
            id: `rich_${i}`,
            category: 'wealth',
            title: `네온 재벌 ${i+1}`,
            desc: `보유 크레딧 ${t.toLocaleString()}₵를 달성하십시오.`,
            requirement: t,
            reward: Math.floor(t * 0.1),
            check: (gs) => gs.credits >= t
        });
    });

    const sellTiers = [1, 5, 10, 25, 50, 100, 250, 500, 1000, 2500];
    sellTiers.forEach((t, i) => {
        ACHIEVEMENTS_DATA.push({
            id: `trader_${i}`,
            category: 'sell',
            title: `암시장 거물 ${i+1}`,
            desc: `무기를 총 ${t}회 판매하십시오.`,
            requirement: t,
            reward: t * 20000,
            check: (gs) => gs.stats.totalSells >= t
        });
    });

    for(let c=1; c<=70; c++) {
        ACHIEVEMENTS_DATA.push({
            id: `collector_${c}`,
            category: 'collect',
            title: `데이터 수집가 ${c}`,
            desc: `무기 도감을 ${c}종류 발견하십시오.`,
            requirement: c,
            reward: c * 100000,
            check: (gs) => Object.keys(gs.codex).length >= c
        });
    }

    const destroyTiers = [1, 5, 10, 25, 50, 100, 250, 500, 1000, 2500];
    destroyTiers.forEach((t, i) => {
        ACHIEVEMENTS_DATA.push({
            id: `destructor_${i}`,
            category: 'unlucky',
            title: `파괴의 미학 ${i+1}`,
            desc: `무기가 총 ${t}회 파괴(변이)되었습니다.`,
            requirement: t,
            reward: t * 50000,
            check: (gs) => gs.stats.totalDestructions >= t
        });
    });

    ACHIEVEMENTS_DATA.push({
        id: `hidden_god`,
        category: 'hidden',
        title: `네온의 신`,
        desc: `모든 무기를 발견하고 누적 10억 크레딧을 버셨습니다.`,
        requirement: 1,
        reward: 500000000,
        check: (gs) => Object.keys(gs.codex).length >= 70 && gs.stats.totalCreditsEarned >= 1000000000
    });
}
generateAchievements();

const elCredits = document.getElementById('credits');
const elBladeLevel = document.getElementById('blade-level');
const elXpBar = document.getElementById('xp-bar');
const elLogWindow = document.getElementById('log-window');
const elBladePreview = document.getElementById('blade-preview');
const elBtnEnhance = document.getElementById('btn-enhance');
const elBtnHack = document.getElementById('btn-hack');

function init() {
    loadGame();
    initFirebase();
    updateUI();
    addLog("시스템 초기화 완료. 그리드에 접속 중...", "system");
    
    // Auto-sync initial state to server if squad is joined
    if (gameState.squadCode) updateServerScore();
}

function updateUI() {
    const currentWeapon = CONFIG.WEAPONS_DATA[gameState.currentWeaponIndex];
    if (!currentWeapon) return;
    const currentLevel = gameState.currentLevel;

    if (elCredits) elCredits.innerText = gameState.credits.toLocaleString();
    if (elBladeLevel) elBladeLevel.innerText = currentLevel;
    if (elXpBar) elXpBar.style.width = `${gameState.xp % 100}%`;
    
    const elPlayerId = document.getElementById('player-id');
    if (elPlayerId) elPlayerId.innerText = gameState.playerName || "CYBER_RUNNER_01";
    
    const elSquadName = document.getElementById('squad-name');
    const elBtnCopyInvite = document.getElementById('btn-copy-invite');
    if (elSquadName) {
        elSquadName.innerText = gameState.squadCode ? `${gameState.squadCode}_SQUAD` : "SOLO_MODE";
        elSquadName.className = gameState.squadCode ? "neon-text-blue" : "neon-text-pink";
        
        if (elBtnCopyInvite) {
            elBtnCopyInvite.style.display = gameState.squadCode ? "inline" : "none";
        }
    }
    
    if (!gameState.codex[gameState.currentWeaponIndex]) {
        gameState.codex[gameState.currentWeaponIndex] = { discovered: true, maxLevel: 0 };
    }
    if (currentLevel > gameState.codex[gameState.currentWeaponIndex].maxLevel) {
        gameState.codex[gameState.currentWeaponIndex].maxLevel = currentLevel;
    }
    
    const nextCost = CONFIG.ENHANCE_COSTS[currentLevel] || 0;
    const enhanceBtnCost = elBtnEnhance.querySelector('.btn-cost');
    if (enhanceBtnCost) enhanceBtnCost.innerText = `비용: ${Math.floor(nextCost).toLocaleString()}₵`;
    
    if (gameState.credits > gameState.stats.maxCreditsHeld) {
        gameState.stats.maxCreditsHeld = gameState.credits;
    }
    
    const elProbBonus = document.getElementById('prob-bonus');
    if (elProbBonus) elProbBonus.innerText = gameState.permanentProbBonus.toFixed(2);
    
    checkAchievements();
    
    const elBtnSell = document.getElementById('btn-sell');
    if (elBtnSell) {
        if (currentLevel > 0) {
            const sellRange = CONFIG.SELL_DATA[currentLevel];
            const avgValue = Math.floor((sellRange[0] + sellRange[1]) / 2);
            const sellBtnVal = elBtnSell.querySelector('.btn-value');
            if (sellBtnVal) sellBtnVal.innerText = `가치: ~${avgValue.toLocaleString()}₵`;
            elBtnSell.disabled = false;
            elBtnSell.classList.remove('disabled-btn');
        } else {
            const sellBtnVal = elBtnSell.querySelector('.btn-value');
            if (sellBtnVal) sellBtnVal.innerText = "가치: 0₵";
            elBtnSell.disabled = true;
            elBtnSell.classList.add('disabled-btn');
        }
    }
    
    const currentProb = CONFIG.PROB_TABLE[currentLevel] || {success: 0, maintain: 0, destroy: 0};
    const bonus = gameState.pityStack * 0.01;
    const finalSuccess = Math.min(1.0, currentProb.success + bonus + (gameState.permanentProbBonus / 100));
    
    updateProbDisplay(finalSuccess, currentProb.maintain, currentProb.destroy);
    
    if (elBladePreview) {
        const scale = Math.min(1.2, 1 + (currentLevel * 0.01));
        const brightness = 100 + (currentLevel * 5);
        const hueRotate = currentWeapon.hue || 0;
        elBladePreview.style.transform = `scale(${scale})`;
        elBladePreview.style.filter = `brightness(${brightness}%) hue-rotate(${hueRotate}deg) drop-shadow(0 0 ${currentLevel + 5}px ${currentWeapon.color})`;
        
        // Apply base styles
        elBladePreview.style.backgroundSize = 'contain';
        elBladePreview.style.backgroundRepeat = 'no-repeat';
        elBladePreview.style.backgroundPosition = 'center';

        let tier = 0;
        if (currentLevel >= 16) tier = 4;
        else if (currentLevel >= 11) tier = 3;
        else if (currentLevel >= 6) tier = 2;
        else if (currentLevel >= 1) tier = 1;

        if (currentWeapon.image) {
            if (tier > 0) {
                const tierSource = currentWeapon.image.replace('.png', `_t${tier}.png`);
                const img = new Image();
                img.onload = () => { elBladePreview.style.backgroundImage = `url(${tierSource})`; };
                img.onerror = () => { elBladePreview.style.backgroundImage = `url(${currentWeapon.image})`; };
                img.src = tierSource;
            } else {
                elBladePreview.style.backgroundImage = `url(${currentWeapon.image})`;
            }
        } else {
            elBladePreview.style.backgroundImage = 'none';
        }
    }

    const today = new Date().toISOString().split('T')[0];
    if (elBtnHack) {
        if (gameState.lastHackDate === today) {
            elBtnHack.disabled = true;
            const hackStatus = elBtnHack.querySelector('.btn-status');
            if (hackStatus) hackStatus.innerText = "보안 강화됨 (내일 다시)";
        } else {
            elBtnHack.disabled = false;
            const hackStatus = elBtnHack.querySelector('.btn-status');
            if (hackStatus) hackStatus.innerText = "대기 중";
        }
    }
}

function updateProbDisplay(s, m, d) {
    let probEl = document.getElementById('prob-info');
    if (!probEl) {
        probEl = document.createElement('div');
        probEl.id = 'prob-info';
        const actionGrid = document.querySelector('.action-grid');
        if (actionGrid) actionGrid.parentNode.insertBefore(probEl, actionGrid);
    }
    if (probEl) {
        probEl.innerHTML = `
            <span class="prob success">성공: ${(s * 100).toFixed(1)}%</span>
            <span class="prob maintain">유지: ${(m * 100).toFixed(1)}%</span>
            <span class="prob destroy">파괴: ${(d * 100).toFixed(1)}%</span>
            <span class="prob stack">스택: +${(gameState.pityStack)}%</span>
        `;
    }
}

function addLog(message, type = "system") {
    if (!elLogWindow) return;
    const entry = document.createElement('p');
    entry.className = `log-entry ${type}`;
    entry.innerText = `> ${message}`;
    elLogWindow.appendChild(entry);
    elLogWindow.scrollTop = elLogWindow.scrollHeight;
    if (elLogWindow.children.length > 50) {
        elLogWindow.removeChild(elLogWindow.firstChild);
    }
}

async function enhanceBlade() {
    const currentLevel = gameState.currentLevel;
    const currentWeapon = CONFIG.WEAPONS_DATA[gameState.currentWeaponIndex];
    if (currentLevel >= 20) {
        addLog("최대 강화 레벨에 도달했습니다!", "system");
        return;
    }
    const cost = CONFIG.ENHANCE_COSTS[currentLevel];
    if (gameState.credits < cost) {
        addLog("크레딧이 부족합니다. 더 많은 데이터 뱅크를 해킹하세요.", "fail");
        return;
    }
    if (cost >= 10000 && !confirm(`강화 비용으로 ${cost.toLocaleString()}₵가 소모됩니다. 계속하시겠습니까?`)) {
        return;
    }

    gameState.credits -= cost;
    gameState.stats.totalEnhanceAttempts++;
    const currentProb = CONFIG.PROB_TABLE[currentLevel];
    const bonus = gameState.pityStack * 0.01;
    const cyberLuck = gameState.permanentProbBonus / 100;
    const successProb = Math.min(1.0, currentProb.success + bonus + cyberLuck);
    const randomVal = Math.random();
    
    const getEpicQuote = (type) => {
        const q = CONFIG.EPIC_LOGS[type];
        return q[Math.floor(Math.random() * q.length)];
    };

    if (randomVal < successProb) {
        gameState.currentLevel++;
        gameState.pityStack = 0;
        gameState.stats.totalEnhanceSuccess++;
        addLog(`[성공] ${currentWeapon.name} 가 ${gameState.currentLevel} 레벨로 강화되었습니다.`, "success");
        addLog(`> ${getEpicQuote('SUCCESS')}`, "system");
        triggerEffect('flash-success');
        updateServerScore();
    } else if (randomVal < successProb + currentProb.maintain) {
        gameState.pityStack++; 
        addLog(`[유지] 강화에 실패했지만 레벨이 유지되었습니다. (스택 +1)`, "fail");
        addLog(`> ${getEpicQuote('MAINTAIN')}`, "system");
        triggerEffect('flash-maintain');
    } else {
        gameState.stats.totalDestructions++;
        addLog(`[파괴] '${currentWeapon.name}' (+${gameState.currentLevel}) 가 파괴되었습니다!`, "fail");
        addLog(`> ${getEpicQuote('DESTROY')}`, "fail");
        mutateWeapon();
    }
    saveGame();
    updateUI();
}

function mutateWeapon() {
    const oldLevel = gameState.currentLevel;
    const currentIndex = gameState.currentWeaponIndex;
    const totalWeapons = CONFIG.WEAPONS_DATA.length;
    let nextIndex;
    const rand = Math.random();
    
    if (rand < 0.05) {
        nextIndex = Math.floor(Math.random() * 20);
        addLog(`[데이터 변이] 시스템의 임계점을 돌파하며 히든 데이터가 발현되었습니다!`, "success");
    } else {
        if (Math.random() < 0.6) {
            const offset = Math.floor(Math.random() * 5) - 2;
            nextIndex = Math.max(20, Math.min(69, currentIndex + offset));
        } else {
            nextIndex = 20 + Math.floor(Math.random() * 50);
        }
    }
    if (nextIndex === currentIndex && totalWeapons > 1) {
        nextIndex = (nextIndex + 1) % totalWeapons;
    }
    
    const newWeapon = CONFIG.WEAPONS_DATA[nextIndex];
    gameState.currentWeaponIndex = nextIndex;
    gameState.currentLevel = 0;
    gameState.pityStack = 0; 
    gameState.stats.totalMutations++;
    
    if (!gameState.codex[nextIndex]) {
        gameState.codex[nextIndex] = { discovered: true, maxLevel: 0 };
    }
    
    addLog(`[변이] 새로운 무기 '${newWeapon.name}' 을(를) 획득했습니다!`, "success");
    triggerEffect('flash-destroy');
    updateServerScore();
}

function triggerEffect(className) {
    document.body.classList.add(className);
    setTimeout(() => document.body.classList.remove(className), 500);
}

async function hackData() {
    const today = new Date().toISOString().split('T')[0];
    if (gameState.lastHackDate === today) {
        addLog("이미 오늘자 데이터 뱅크를 해킹했습니다. 시스템 감시가 심합니다.", "fail");
        return;
    }
    elBtnHack.disabled = true;
    const hackBtnStatus = elBtnHack.querySelector('.btn-status');
    if (hackBtnStatus) hackBtnStatus.innerText = "해킹 중...";
    addLog("방화벽 돌파 중... ICE 우회 시도...", "system");
    await new Promise(r => setTimeout(r, 1500));
    const reward = 60000;
    gameState.credits += reward;
    gameState.stats.totalCreditsEarned += reward;
    gameState.stats.totalHacks++;
    gameState.xp += CONFIG.HACK_XP;
    gameState.lastHackDate = today;
    addLog(`[성공] 데이터 뱅크를 해킹했습니다. ${reward.toLocaleString()}₵를 획득했습니다.`, "success");
    addLog("해당 구역의 보안이 강화되었습니다. 내일 다시 시도하십시오.", "system");
    saveGame();
    updateServerScore();
    updateUI();
}

function saveGame() {
    localStorage.setItem('neonEdgeSave', JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem('neonEdgeSave');
    if (saved) {
        const loadedData = JSON.parse(saved);
        const stats = { ...gameState.stats, ...(loadedData.stats || {}) };
        const codex = { ...gameState.codex, ...(loadedData.codex || {}) };
        gameState = { ...gameState, ...loadedData, stats, codex };
        
        // Ensure name and squad are kept if already in gameState but missing in save
        if (!gameState.playerName) gameState.playerName = "CYBER_RUNNER_01";
    }
}

function changePlayerName() {
    const newName = prompt("새로운 러너 식별명을 입력하십시오 (최대 12자):", gameState.playerName);
    if (newName && newName.trim() !== "" && newName.length <= 12) {
        gameState.playerName = newName.trim();
        addLog(`식별명이 '${gameState.playerName}'(으)로 변경되었습니다.`, "system");
        saveGame();
        updateUI();
        updateServerScore();
    }
}

function openSquadEntry() {
    const code = prompt("참가할 스쿼드의 초대 코드를 입력하십시오 (미입력 시 솔로 모드):", gameState.squadCode || "");
    if (code !== null) {
        if (code.trim() === "") {
            gameState.squadCode = null;
            addLog("스쿼드를 탈퇴했습니다. 솔로 모드로 전환됩니다.", "system");
        } else {
            gameState.squadCode = code.trim().toUpperCase();
            addLog(`스쿼드 '${gameState.squadCode}'에 합류했습니다!`, "success");
        }
        saveGame();
        updateUI();
        updateServerScore();
    }
}

function copyInviteCode() {
    if (!gameState.squadCode) return;
    const url = window.location.href.split('?')[0];
    const text = `[NEON EDGE SQUAD INVITE]\n접속 링크: ${url}\n스쿼드 그룹: ${gameState.squadCode}\n초대 코드: ${gameState.squadCode}\n지금 합류하여 함께 그리드를 정복하십시오.\n#NeonEdge #SwordRPG`;
    
    navigator.clipboard.writeText(text).then(() => {
        addLog(`스쿼드 '${gameState.squadCode}' 초대 코드가 복사되었습니다.`, "success");
        const btn = document.getElementById('btn-copy-invite');
        if (btn) {
            const original = btn.innerText;
            btn.innerText = "[복사완료]";
            setTimeout(() => { btn.innerText = original; }, 2000);
        }
    });
}

function openRankingModal() {
    const overlay = document.getElementById('ranking-overlay');
    const list = document.getElementById('ranking-list');
    const subtitle = document.getElementById('ranking-subtitle');
    if (!overlay || !list) return;

    const squad = gameState.squadCode || "SOLO";
    subtitle.innerText = `${squad} 구역 실시간 데이터`;
    list.innerHTML = `<div class="ranking-row"><span style="color: var(--neon-blue);">그리드 데이터 검색 중...</span></div>`;

    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';

    if (!database || !gameState.squadCode) {
        list.innerHTML = `<div class="ranking-row"><span style="color: #666;">스쿼드에 참여해야 실시간 순위를 볼 수 있습니다.</span></div>`;
        return;
    }

    // Remove existing listener if any
    if (rankingListener) {
        database.ref(`squads/${gameState.squadCode}`).off('value', rankingListener);
    }

    // Set up live listener
    rankingListener = database.ref(`squads/${gameState.squadCode}`).on('value', snapshot => {
        const data = snapshot.val();
        if (!data) {
            list.innerHTML = `<div class="ranking-row"><span style="color: #666;">해당 스쿼드에 데이터가 없습니다.</span></div>`;
            return;
        }

        const runners = Object.values(data);
        const sorted = runners.sort((a, b) => b.level - a.level || b.credits - a.credits);

        list.innerHTML = sorted.map((r, i) => `
            <div class="ranking-row ${r.name === gameState.playerName ? 'me' : ''}">
                <span class="rank-num">#${i+1}</span>
                <span class="rank-name" style="flex-grow: 1;">${r.name}</span>
                <span class="rank-score" style="color: var(--neon-blue);">+${r.level} Lv</span>
            </div>
        `).join('');
    }, e => {
        list.innerHTML = `<div class="ranking-row"><span style="color: var(--neon-pink);">에러: 연결 실패</span></div>`;
    });
}

function openShareCard() {
    const overlay = document.getElementById('share-card-overlay');
    const content = document.getElementById('runner-card-content');
    if (!overlay || !content) return;

    const currentWeapon = CONFIG.WEAPONS_DATA[gameState.currentWeaponIndex];
    const topAch = gameState.unlockedAchievements.slice(-1)[0] || "데이터 없음";

    content.innerHTML = `
        <div class="runner-card-header">
            <div>
                <div class="card-label">RUNNER_ID</div>
                <div class="card-val">${gameState.playerName}</div>
            </div>
            <div style="text-align: right;">
                <div class="card-label">SQUAD_AUTH</div>
                <div class="card-val" style="color: var(--neon-pink);">${gameState.squadCode || "PRIVATE"}</div>
            </div>
        </div>
        <div class="runner-card-main">
            <div class="card-weapon-img" style="background-image: url(${currentWeapon.image}); filter: hue-rotate(${currentWeapon.hue}deg) drop-shadow(0 0 10px ${currentWeapon.color});"></div>
            <div class="card-stats">
                <div class="card-stat-item">
                    <span class="card-label">PRIMARY_BLADE</span>
                    <span class="card-val" style="color: ${currentWeapon.color}; font-size: 0.9rem;">${currentWeapon.name}</span>
                </div>
                <div class="card-stat-item">
                    <span class="card-label">ENHANCE_LEVEL</span>
                    <span class="card-val" style="color: var(--neon-blue);">+${gameState.currentLevel}</span>
                </div>
                <div class="card-stat-item" style="margin-top: 10px;">
                    <span class="card-label">LATEST_ACHIEVEMENT</span>
                    <span style="font-size: 0.7rem; color: var(--neon-green);">${topAch}</span>
                </div>
            </div>
        </div>
    `;

    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';
}

function copyCardToClipboard() {
    const currentWeapon = CONFIG.WEAPONS_DATA[gameState.currentWeaponIndex];
    const url = window.location.href.split('?')[0];
    const text = `[NEON EDGE RUNNER ID]\nNAME: ${gameState.playerName}\nSQUAD: ${gameState.squadCode || "SOLO"}\nWEAPON: ${currentWeapon.name} (+${gameState.currentLevel})\nCREDITS: ${gameState.credits.toLocaleString()}₵\nPLAY: ${url}\n#NeonEdge #SwordRPG`;
    
    navigator.clipboard.writeText(text).then(() => {
        addLog("러너 데이터가 클립보드에 복사되었습니다.", "success");
        const btn = document.getElementById('btn-copy-card');
        btn.innerText = "복사_완료!";
        setTimeout(() => { btn.innerText = "상태_데이터_복사"; }, 2000);
    });
}

function sellWeapon() {
    const currentLevel = gameState.currentLevel;
    if (currentLevel <= 0) return;
    const sellRange = CONFIG.SELL_DATA[currentLevel];
    const finalPrice = Math.floor(Math.random() * (sellRange[1] - sellRange[0] + 1)) + sellRange[0];
    if (!confirm(`무기를 판매하시겠습니까? (예상 금액: ${finalPrice.toLocaleString()}₵)`)) return;
    gameState.credits += finalPrice;
    gameState.stats.totalCreditsEarned += finalPrice;
    gameState.stats.totalSells++;
    const newWeaponIndex = 20 + Math.floor(Math.random() * 50);
    gameState.currentWeaponIndex = newWeaponIndex;
    gameState.currentLevel = 0;
    gameState.pityStack = 0;
    addLog(`[판매] +${currentLevel} 무기를 판매하여 ${finalPrice.toLocaleString()}₵를 획득했습니다.`, "success");
    addLog(`[지급] 기본 등급의 새로운 무기를 지급받았습니다.`, "system");
    saveGame();
    updateUI();
    updateServerScore();
}

let currentAchCategory = 'all';
let currentCodexCategory = 'all';

function checkAchievements() {
    ACHIEVEMENTS_DATA.forEach(ach => {
        if (!gameState.unlockedAchievements.includes(ach.id)) {
            if (ach.check(gameState)) {
                unlockAchievement(ach);
            }
        }
    });
    checkMilestones();
}

function checkMilestones() {
    const total = ACHIEVEMENTS_DATA.length;
    const unlocked = gameState.unlockedAchievements.length;
    const progress = (unlocked / total) * 100;
    const milestones = [
        { p: 25, id: 'm1' }, { p: 50, id: 'm2' }, { p: 75, id: 'm3' }, { p: 100, id: 'm4' }
    ];
    milestones.forEach(m => {
        if (progress >= m.p && !gameState.claimedMilestones.includes(m.id)) {
            gameState.claimedMilestones.push(m.id);
            addLog(`[마일스톤] 전체 업적 ${m.p}% 달성에 도달했습니다! 명성이 높아집니다.`, "success");
            saveGame();
        }
    });
    updateMilestoneUI(progress);
}

function updateMilestoneUI(progress) {
    const bar = document.getElementById('ach-main-bar');
    const text = document.getElementById('ach-total-progress');
    const nextBonus = document.getElementById('milestone-next-bonus');
    if (!bar || !text) return;
    bar.style.width = `${progress}%`;
    text.innerText = Math.floor(progress);
    if (progress < 25) nextBonus.innerText = "(명성을 쌓아 25% 달성을 향해 나아가십시오)";
    else if (progress < 50) nextBonus.innerText = "(명성을 쌓아 50% 달성을 향해 나아가십시오)";
    else if (progress < 75) nextBonus.innerText = "(명성을 쌓아 75% 달성을 향해 나아가십시오)";
    else if (progress < 100) nextBonus.innerText = "(명성을 쌓아 100% 달성을 향해 나아가십시오)";
    else nextBonus.innerText = "(모든 마일스톤 달성 완료!)";
}

function unlockAchievement(ach) {
    gameState.unlockedAchievements.push(ach.id);
    let pBonus = 0.01;
    if (ach.reward >= 5000000) pBonus = 0.50;
    else if (ach.reward >= 500000) pBonus = 0.10;
    else if (ach.reward >= 100000) pBonus = 0.05;
    gameState.permanentProbBonus += pBonus;
    showAchievementToast(ach.title);
    addLog(`[업적 달성] '${ach.title}' - 영구 확률보너스 +${pBonus.toFixed(2)}% 확보!`, "success");
    saveGame();
    updateUI(); 
}

function showAchievementToast(name) {
    const toast = document.getElementById('achievement-toast');
    const toastName = document.getElementById('toast-name');
    if (!toast) return;
    toastName.innerText = name;
    toast.classList.remove('hidden');
    toast.style.display = 'flex';
    setTimeout(() => {
        toast.classList.add('hidden');
        setTimeout(() => toast.style.display = 'none', 500);
    }, 4000);
}

function openAchievementModal() {
    const overlay = document.getElementById('achievement-overlay');
    if (!overlay) return;
    renderAchievementList();
    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';
}

function renderAchievementList() {
    const list = document.getElementById('achievement-list');
    if (!list) return;
    const filtered = ACHIEVEMENTS_DATA.filter(ach => {
        if (currentAchCategory === 'all') return true;
        if (currentAchCategory === 'unlucky') return ach.category === 'unlucky' || ach.category === 'hidden';
        return ach.category === currentAchCategory;
    });
    list.innerHTML = filtered.map(ach => {
        const isUnlocked = gameState.unlockedAchievements.includes(ach.id);
        const statusClass = isUnlocked ? 'unlocked' : 'locked';
        let pBonus = 0.01;
        if (ach.reward >= 5000000) pBonus = 0.50;
        else if (ach.reward >= 500000) pBonus = 0.10;
        else if (ach.reward >= 100000) pBonus = 0.05;
        return `
            <div class="achievement-item ${statusClass}">
                <div class="ach-header">
                    <span class="ach-title">${ach.title}</span>
                    <span class="ach-prob">+${pBonus.toFixed(2)}%</span>
                </div>
                <div class="ach-desc">${ach.desc}</div>
            </div>
        `;
    }).join('');
}

function setupAchTabs() {
    const tabs = document.querySelectorAll('.ach-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            currentAchCategory = e.target.dataset.cat;
            renderAchievementList();
        });
    });
}

function setupCodexTabs() {
    const tabs = document.querySelectorAll('.codex-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            currentCodexCategory = e.target.dataset.cat;
            renderCodexList();
        });
    });
}

function openCodex() {
    addLog("무기 데이터 도감에 접속했습니다.", "system");
    renderCodexList();
    const codexOverlay = document.getElementById('codex-overlay');
    if (codexOverlay) {
        codexOverlay.classList.remove('hidden');
        codexOverlay.style.display = 'flex';
    }
}

function renderCodexList() {
    const codexList = document.getElementById('codex-list');
    const codexStats = document.getElementById('codex-stats');
    if (!codexList) return;
    const discoveredCount = Object.keys(gameState.codex).length;
    if (codexStats) codexStats.innerText = `발견된 무기: ${discoveredCount} / ${CONFIG.WEAPONS_DATA.length}`;
    const filtered = CONFIG.WEAPONS_DATA.filter(w => {
        if (currentCodexCategory === 'all') return true;
        if (currentCodexCategory === 'hidden') return w.hidden === true;
        if (currentCodexCategory === 'normal') return !w.hidden;
        return true;
    });
    codexList.innerHTML = filtered.map(w => {
        const info = gameState.codex[w.id];
        if (info) {
            let tier = 0;
            if (info.maxLevel >= 16) tier = 4;
            else if (info.maxLevel >= 11) tier = 3;
            else if (info.maxLevel >= 6) tier = 2;
            else if (info.maxLevel >= 1) tier = 1;

            const displayImage = (tier > 0) ? w.image.replace('.png', `_t${tier}.png`) : w.image;

            return `
                <div class="weapon-item discovered" style="flex-direction: row; align-items: center; gap: 15px; padding: 10px 15px;">
                    <img src="${displayImage}" 
                         class="codex-thumb" 
                         onerror="this.src='${w.image}'"
                         style="width: 40px; height: 40px; filter: hue-rotate(${w.hue || 0}deg) drop-shadow(0 0 5px ${w.color});">
                    <div class="codex-info" style="display: flex; justify-content: space-between; flex-grow: 1; align-items: center;">
                        <span class="w-name" style="color: ${w.color}; margin-bottom: 0; font-size: 1rem;">${w.name} ${w.hidden ? '[HIDDEN]' : ''}</span>
                        <span class="w-record" style="font-size: 0.85rem; color: #fff; opacity: 0.8;">최고 레벨: +${info.maxLevel}</span>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="weapon-item unknown" style="flex-direction: row; align-items: center; gap: 15px; padding: 10px 15px; opacity: 0.5;">
                    <div class="codex-thumb unknown" style="width: 40px; height: 40px; line-height: 40px; font-size: 1rem;">?</div>
                    <div class="codex-info">
                        <span class="w-name" style="color: #666; margin-bottom: 0;">${w.hidden ? '??_???' : '데이터 유실됨'}</span>
                    </div>
                </div>
            `;
        }
    }).join('');
}

elBtnEnhance.addEventListener('click', enhanceBlade);
elBtnHack.addEventListener('click', hackData);
const elBtnSell = document.getElementById('btn-sell');
if (elBtnSell) elBtnSell.addEventListener('click', sellWeapon);
const elBtnMarket = document.getElementById('btn-market');
if (elBtnMarket) elBtnMarket.addEventListener('click', openCodex);
const elBtnAchievements = document.getElementById('btn-achievements');
if (elBtnAchievements) elBtnAchievements.addEventListener('click', openAchievementModal);

const elBtnShowRankings = document.getElementById('btn-show-rankings');
if (elBtnShowRankings) elBtnShowRankings.addEventListener('click', openRankingModal);

const elBtnOpenShare = document.getElementById('btn-open-share');
if (elBtnOpenShare) elBtnOpenShare.addEventListener('click', openShareCard);

const elBtnEditName = document.getElementById('btn-edit-name');
if (elBtnEditName) elBtnEditName.addEventListener('click', changePlayerName);

const elBtnEditSquad = document.getElementById('btn-edit-squad');
if (elBtnEditSquad) elBtnEditSquad.addEventListener('click', openSquadEntry);

const elBtnCopyInvite = document.getElementById('btn-copy-invite');
if (elBtnCopyInvite) elBtnCopyInvite.addEventListener('click', copyInviteCode);

const elBtnCloseRanking = document.getElementById('btn-close-ranking');
if (elBtnCloseRanking) elBtnCloseRanking.addEventListener('click', () => { 
    document.getElementById('ranking-overlay').classList.add('hidden'); 
    document.getElementById('ranking-overlay').style.display='none'; 
    if (rankingListener && database && gameState.squadCode) {
        database.ref(`squads/${gameState.squadCode}`).off('value', rankingListener);
        rankingListener = null;
    }
});

const elBtnCloseShare = document.getElementById('btn-close-share');
if (elBtnCloseShare) elBtnCloseShare.addEventListener('click', () => { document.getElementById('share-card-overlay').classList.add('hidden'); document.getElementById('share-card-overlay').style.display='none'; });

const elBtnCopyCard = document.getElementById('btn-copy-card');
if (elBtnCopyCard) elBtnCopyCard.addEventListener('click', copyCardToClipboard);

const elBtnCloseCodex = document.getElementById('btn-close-codex');
const elBtnCloseCodexX = document.getElementById('btn-close-codex-x');
const closeCodex = () => {
    const codOverlay = document.getElementById('codex-overlay');
    codOverlay.classList.add('hidden');
    codOverlay.style.display = 'none'; 
};
if (elBtnCloseCodex) elBtnCloseCodex.addEventListener('click', closeCodex);
if (elBtnCloseCodexX) elBtnCloseCodexX.addEventListener('click', closeCodex);
const elBtnCloseAch = document.getElementById('btn-close-achievements');
if (elBtnCloseAch) elBtnCloseAch.addEventListener('click', () => { 
    const achOverlay = document.getElementById('achievement-overlay');
    achOverlay.classList.add('hidden');
    achOverlay.style.display = 'none';
});

setupCodexTabs();
setupAchTabs();
window.onload = init;
