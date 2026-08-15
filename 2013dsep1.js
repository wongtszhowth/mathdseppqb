// 2013dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2013-DSE-MATH-CP1-Q01",
        year: 2013,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{x^{20}y^{13}}{(x^5y)^6}$，並以正指數表示答案。 <span class="marks">(3分)</span>`,
        hint: `先展開分母指數，再應用指數定律。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q02",
        year: 2013,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `令 $k$ 成為公式 $\\dfrac{3}{h} - \\dfrac{1}{k} = 2$ 的主項。 <span class="marks">(3分)</span>`,
        hint: `通分後解出 $k$。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q03",
        year: 2013,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$4m^2 - 25n^2$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$4m^2 - 25n^2 + 6m - 15n$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 平方差。 <br>(b) 分組因式分解。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q04",
        year: 2013,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: `$7$ 個梨和 $3$ 個橙的價錢為 $\\$47$，而 $5$ 個梨和 $6$ 個橙的價錢為 $\\$49$。 求一個梨的價錢。 <span class="marks">(4分)</span>`,
        hint: `設梨價為 $x$，橙價為 $y$，解聯立方程。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q05",
        year: 2013,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解不等式 $\\dfrac{19-7x}{3} > 23-5x$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求所有能同時滿足不等式 $\\dfrac{19-7x}{3} > 23-5x$ 及不等式 $18-2x \\ge 0$ 的整數。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 解不等式。 <br>(b) 取交集後列出整數。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q06",
        year: 2013,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Coordinate Geometry"],
        difficulty: 2,
        content: `<div style="color: red;">在某極坐標系中，$O$ 為極點，點 $A$ 及點 $B$ 的極坐標分別為 $(26,10^\\circ)$ 及 $(26,130^\\circ)$。 設 $L$ 為 $\\Delta OAB$ 的反射對稱軸。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">描述 $L$ 與 $\\angle AOB$ 之間的幾何關係。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $L$ 與 $AB$ 的交點的極坐標。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div></div>`,
        hint: `(a) 角平分線。 <br>(b) 求交點極坐標。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q07",
        year: 2013,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為四邊形。 對角線 $AC$ 與對角線 $BD$ 相交於 $E$。 已知 $BE=CE$ 及 $\\angle BAC = \\angle BDC$。 <img src="img/2013dsep1q07.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ABC \\cong \\Delta DCB$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">考慮在圖中的三角形。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">有多少對全等三角形？</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">有多少對相似三角形？<br><span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用 SAS 或 ASA 證明。 <br>(b) 數算全等及相似對數。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q08",
        year: 2013,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: `若一包海鹽的重量量得 $100\\text{ g}$ 準確至最接近的 $\\text{g}$，則稱它為<i>普通裝</i>。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求一包<i>普通裝</i>海鹽的最小可取重量。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$32$ 包<i>普通裝</i>海鹽之總重量有沒有可能量得 $3.1\\text{ kg}$ 準確至最接近的 $0.1\\text{ kg}$？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 考慮誤差範圍下限。 <br>(b) 計算總誤差範圍比較。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q09",
        year: 2013,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 1,
        content: `下面的棒形圖顯示 $D$ 公司僱員的家庭成員人數的分佈。<img src="img/2013dsep1q09zh.jpg" class="q-img" alt="題目附圖" style="max-width: 80%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求上述分佈的平均值、四分位數間距及標準差。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$D$ 公司某僱員離職。 這僱員的家庭成員人數為 $7$。 求這僱員離職而引致 $D$ 公司僱員的家庭成員人數的標準差的改變。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 從圖讀取頻數後計算。 <br>(b) 重新計算標準差比較。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q10",
        year: 2013,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion", "Probability"],
        difficulty: 1,
        content: `$A$ 委員會的委員年歲如下：<div style="text-align: center; white-space: pre;">$17$　$18$　$21$　$21$　$22$　$22$　$23$　$23$　$23$　$31$<br>$31$　$34$　$35$　$36$　$47$　$47$　$58$　$68$　$69$　$69$</div><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $A$ 委員會的委員年歲的中位數及眾數。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">下面的幹葉圖顯示 $B$ 委員會的委員年歲的分佈。 已知這分佈的分佈域為 $47$。
		<table class="q-table" style="border-collapse: collapse; table-layout: auto; width: auto; white-space: pre;" align="center">
    <colgroup>
      <col style="width: auto;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;"><u>幹（十位）</u></td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;"><u>葉（個位）</u></td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">2</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$a$　5　6　7</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3　3　8</td>
    </tr>
	<tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1　2　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">7　$b$</td>
    </tr>    
  </table></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $a$ 及 $b$。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">現從每個委員會中，各隨機選出一名委員作該委員會的代表。 當該兩名代表的年歲之差超過 $40$ 時，他們便可參加某比賽。 求這兩名代表可參加該比賽的概率。 <br><span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 排序後求中位數及眾數。 <br>(b) 由分佈域求 $a$、$b$，再計算概率。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q11",
        year: 2013,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `一周界為 $\\ell$ 米的托盤的重量為 $W$ 克。 已知 $W$ 為兩部分之和，一部分隨 $\\ell$ 正變，另一部分隨 $\\ell^2$ 正變。 當 $\\ell=1$ 時，$W=181$； 且當 $\\ell=2$ 時，$W=402$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求一周界為 $1.2$ 米的托盤的重量。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若一托盤的重量為 $594$ 克，求該托盤的周界。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $W = A\\ell + B\\ell^2$，代入求係數。 <br>(b) 解二次方程。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q12",
        year: 2013,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: `設 $\\mathrm{f}(x) = 3x^3 - 7x^2 + kx - 8$，其中 $k$ 為一常數。 已知 $\\mathrm{f}(x) \\equiv (x-2)(ax^2 + bx + c)$，其中 $a$、$b$ 及 $c$ 均為常數。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $a$、$b$ 及 $c$。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{f}(x) = 0$ 所有的根均為實數。 你是否同意？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 比較係數求 $a$、$b$、$c$ 及 $k$。 <br>(b) 因式分解後檢查判別式。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q13",
        year: 2013,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `在某工場內，把 $2$ 個底半徑均為 $R\\text{ cm}$ 的完全相同的實心金屬直立圓柱體熔化，並重鑄成 $27$ 個底半徑均為 $r\\text{ cm}$ 及高均為 $10\\text{ cm}$ 的完全相同的較小的實心直立圓柱體。 已知較大的圓柱體的底面積為較小的 $9$ 倍。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$r : R$，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">較大的圓柱體的高。<br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某工匠宣稱較小的圓柱體與較大的圓柱體相似。 你是否同意？ 試解釋你的答案。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用底面積比及體積守恆求高。 <br>(b) 比較高與半徑比。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q14",
        year: 2013,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Coordinate Geometry", "Intersection of Straight Line and Circle"],
        difficulty: 2,
        content: `圓 $C$ 的方程為 $x^2 + y^2 - 12x - 34y + 225 = 0$。 將 $C$ 的圓心記為 $R$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $R$ 的坐標。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">直線 $L$ 的方程為 $4x + 3y + 50 = 0$。 現知 $C$ 與 $L$ 沒有相交。 設 $P$ 為 $L$ 上的一點使得 $P$ 最接近 $R$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $P$ 與 $R$ 間的距離。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">設 $Q$ 為 $C$ 上的一動點。 當 $Q$ 最接近 $P$ 時，</div></div><div class="q-line q-level-3"><span class="q-label">(1)</span><div class="q-text-content">描述 $P$、$Q$ 與 $R$ 之間的幾何關係；</div></div><div class="q-line q-level-3"><span class="q-label">(2)</span><div class="q-text-content">求 $\\Delta OPQ$ 的面積與 $\\Delta OQR$ 的面積之比，其中 $O$ 為原點。<br><span class="marks">(8分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 完成平方求圓心。 <br>(b) 點到直線距離；分析最短距離幾何關係。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q15",
        year: 2013,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score", "Measures of Central Tendency"],
        difficulty: 2,
        content: `下面的框線圖顯示某班學生在一測驗中得分（以分為單位）的分佈。 在該測驗中，<u>素珊</u>獲最高得分，而<u>志誠</u>獲得 $65$ 分。 <u>素珊</u>及<u>志誠</u>在該測驗中的標準分分別為 $3$ 及 $0.5$。<img src="img/2013dsep1q15zh.jpg" class="q-img" alt="題目附圖" style="max-width: 80%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該分佈的平均值。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content"><u>素珊</u>宣稱在該測驗中至少一半學生的標準分均為負值。 你是否同意？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用標準分反求平均值。 <br>(b) 比較中位數與平均值。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q16",
        year: 2013,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 1,
        content: `某盒子內有 $5$ 個白色杯及 $11$ 個藍色杯。 若從該盒子中隨機同時抽出 $6$ 個杯，<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求抽出至少 $4$ 個白色杯的概率；<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求抽出至少 $3$ 個藍色杯的概率。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `用組合數計算。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q17",
        year: 2013,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs", "Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $\\mathrm{f}(x) = 36x - x^2$。 利用配方法，求 $y = \\mathrm{f}(x)$ 的圖像的頂點的坐標。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">一條繩子的長度為 $108\\text{ m}$。 某保安員將該繩子分割為兩條。 一條用作圍成一面積為 $A\\text{ m}^2$ 的長方形禁區；另一條長度為 $x\\text{ m}$，且用作將這禁區分成兩長方形區域，如圖所示。<img src="img/2013dsep1q17b.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">以 $x$ 表 $A$。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">該保安員宣稱這禁區的面積可大於 $500\\text{ m}^2$。 你是否同意？ 試解釋你的答案。 <br><span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 配方求頂點。 <br>(b) 用周界關係表 $A$，再求最大值。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q18",
        year: 2013,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Trigonometry (3D)"],
        difficulty: 3,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">圖 (a) 顯示一張三角形紙卡 $ABC$，其中 $AB = 28\\text{ cm}$ 、 $BC = 21\\text{ cm}$ 及 $AC = 35\\text{ cm}$。 設 $M$ 為 $AC$ 上的一點使得 $\\angle BMC = 75^\\circ$。<img src="img/2013dsep1q18a.jpg" class="q-img" alt="題目附圖" style="max-width: 55%;"><div style="text-align: center;">圖 (a)</div>求</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$\\angle BCM$，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$CM$。<br><span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content"><u>文俊</u>將 (a) 所描述的三角形紙卡沿 $BM$ 摺起，使得 $AB$ 及 $BC$ 均位於水平地面上，如圖 (b) 所示。 已知 $\\angle AMC = 107^\\circ$。<img src="img/2013dsep1q18b.jpg" class="q-img" alt="題目附圖" style="max-width: 95%;"><div style="text-align: center;">圖 (b)</div></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求在水平地面上 $A$ 與 $C$ 間的距離。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">設 $N$ 為 $BC$ 上的一點使得 $MN$ 垂直於 $BC$。 <u>文俊</u>宣稱面 $BCM$ 與水平地面間的交角為 $\\angle ANM$。 你是否同意？ 試解釋你的答案。 <br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用餘弦公式及正弦公式。 <br>(b) 用三角求距離，檢查交角定義。 `,
        solution: ``
    },
    {
        id: "2013-DSE-MATH-CP1-Q19",
        year: 2013,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 3,
        content: `現對某城市公共房屋的發展進行研究。 已知第 $1$ 年年終時所有公屋單位的總樓面面積為 $9 \\times 10^6\\text{ m}^2$，並且在隨後各年裏，每年所落成的公屋單位的總樓面面積均為前一年年終時全部公屋單位的總樓面面積之 $r\\%$，其中 $r$ 為一常數，而每年所拆卸的公屋單位的總樓面面積均為 $3 \\times 10^5\\text{ m}^2$。 現知第 $3$ 年年終時所有公屋單位的總樓面面積為 $1.026 \\times 10^7\\text{ m}^2$。<div class="q-line"><span class="q-label">(a)</span><span class="q-label">(i)</span><div class="q-text-content">以 $r$ 表第 $2$ 年年終時所有公屋單位的總樓面面積。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $r$。<br><span class="marks">(4分)</span></div></div><div class="q-clearfix"></div><div class="q-line"><span class="q-label">(b)</span><span class="q-label">(i)</span><div class="q-text-content">以 $n$ 表第 $n$ 年年終時所有公屋單位的總樓面面積。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">哪一年年終時所有公屋單位的總樓面面積會首次超過 $4 \\times 10^7\\text{ m}^2$？<br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">現假設第 $n$ 年年終時所需公屋單位的總樓面面積為 $(a(1.21)^n + b)\\text{ m}^2$，其中 $a$ 及 $b$ 均為常數。 某些研究結果顯示下列資料：<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 3em;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$n$</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">第 $n$ 年年終時所需公屋單位的總樓面面積（$\\text{ m}^2$）</td>
    </tr>
	<tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$1 \\times 10^7$</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$1.063 \\times 10^7$</td>
    </tr>
  </table>一研究助理宣稱基於上述假設，某年年終時所有公屋單位的總樓面面積會大於所需公屋單位的總樓面面積。 該宣稱是否正確？ 試解釋你的答案。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 寫遞推關係求 $r$。 <br>(b) 求通項後解不等式。 <br>(c) 求 $a$、$b$ 後比較兩數列。 `,
        solution: ``
    }
);
