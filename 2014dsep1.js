// 2014dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2014-DSE-MATH-CP1-Q01",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{(xy^{-2})^3}{y^4}$，並以正指數表示答案。 <span class="marks">(3分)</span>`,
        hint: `先展開分子指數，再應用指數定律。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q02",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$a^2 - 2a - 3$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$ab^2 + b^2 + a^2 - 2a - 3$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 十字相乘。 <br>(b) 分組因式分解。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q03",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">將 $123.45$ 上捨入至一位有效數字。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將 $123.45$ 捨入至最接近的整數。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">將 $123.45$ 下捨入至一位小數。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `分別應用上捨入、四捨五入及下捨入規則。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q04",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 1,
        content: `下表顯示一些學生擁有計算機的數目的分佈。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">計算機的數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">0</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">學生人數</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">7</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">14</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">15</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
    </tr>
  </table>求上述分佈的中位數、眾數及標準差。 <span class="marks">(3分)</span>`,
        hint: `先求總人數，再求中位數、眾數，最後用公式求標準差。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q05",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `考慮公式 $2(3m+n) = m+7$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">令 $n$ 成為上述公式的主項。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若 $m$ 的值增加 $2$，寫出 $n$ 的值的改變。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 解出 $n$。 <br>(b) 代入新 $m$ 值比較。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q06",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `某玩具的標價為 $\\$255$。 該玩具現以其標價六折售出。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該玩具的售價。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若盈利百分率為 $2\\%$，求該玩具的成本。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 標價 $\\times 0.6$。 <br>(b) 售價 $= $ 成本 $\\times 1.02$。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q07",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: `設 $\\mathrm{f}(x) = 4x^3 - 5x^2 - 18x + c$，其中 $c$ 為一常數。 當 $\\mathrm{f}(x)$ 除以 $x-2$ 時，餘數為 $-33$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$x+1$ 是否 $\\mathrm{f}(x)$ 的因式？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{f}(x)=0$ 所有的根均為有理數。 你是否同意？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 先求 $c$，再用因式定理檢查。 <br>(b) 因式分解後檢查根。 `,
        solution: `<span class="q-label">(a)</span>$\\mathrm{f}(-1) = 0$，$\\therefore$ 是。
		<details style="margin: 8px 0;">
			<summary style="cursor: pointer; user-select: none;">🎬 觀看解題影片</summary>
			<iframe src="https://www.youtube.com/embed/iKSs2hTrAwE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 4/3; margin-top: 8px;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
		</details>
		<span class="q-label">(b)</span>$x=-1$ 、 $x=3$ 或 $x=\\dfrac{-3}{4}$，$\\therefore$ 同意。
		<details style="margin: 8px 0;">
			<summary style="cursor: pointer; user-select: none;">🎬 觀看解題影片</summary>
			<iframe src="https://www.youtube.com/embed/N4mtLL7jx_8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 4/3; margin-top: 8px;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
		</details>`
    },
    {
        id: "2014-DSE-MATH-CP1-Q08",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 1,
        content: `點 $P$ 及點 $Q$ 的坐標分別為 $(-3, 5)$ 及 $(2, -7)$。 $P$ 繞原點 $O$ 逆時針方向旋轉 $270^\\circ$ 至 $P'$。 $Q$ 向左平移 $21$ 單位至 $Q'$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $P'$ 及 $Q'$ 的坐標。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">證明 $PQ$ 垂直於 $P'Q'$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 應用旋轉及平移公式。 <br>(b) 計算斜率乘積。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q09",
        year: 2014,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)"],
        difficulty: 2,
        content: `圖中，$D$ 為 $AC$ 上的一點使得 $\\angle BAC = \\angle CBD$。<img src="img/2014dsep1q09.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ABC \\sim \\Delta BDC$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $AC = 25\\text {cm}$ 、 $BC = 20\\text {cm}$ 及 $BD = 12\\text {cm}$。 $\\Delta BCD$ 是否一直角三角形？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用 AA 相似。 <br>(b) 用畢氏定理檢查。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q10",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Number and Cardinality"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 2,
        content: `$X$ 城與 $Y$ 城相距 $80\\text {km}$。 圖中顯示在某上午 7:30 至 9:30 期間，在 $X$ 城與 $Y$ 城之間的同一直路上汽車 $A$ 及汽車 $B$ 行駛的圖像。 汽車 $A$ 在該期間以恆速率行駛。 汽車 $B$ 於該上午 8:15 停下。<img src="img/2014dsep1q10zh.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求於該上午 8:15 汽車 $A$ 與 $X$ 城間之距離。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">在該上午 7:30 之後，汽車 $A$ 與汽車 $B$ 於甚麼時間首次相遇？<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">汽車 $B$ 的司機宣稱在該上午 8:15 至 9:30 期間，汽車 $B$ 的平均速率較汽車 $A$ 高。 你是否同意？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 從圖像讀取。 <br>(b) 求兩線交點時間。 <br>(c) 比較平均速率。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q11",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 1,
        content: `某畫廊內有 $33$ 幅油畫。 下面的框線圖顯示該畫廊內的油畫的價錢（以千元為單位）的分佈。 已知這分佈的平均值為 $53$ 千元。<img src="img/2014dsep1q11zh.jpg" class="q-img" alt="題目附圖" style="max-width: 80%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求上述分佈的分佈域及四分位數間距。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">現將價錢（以千元為單位）分別為 $32$、$34$、$58$ 及 $59$ 的四幅油畫捐贈給一博物館。 求該畫廊內餘下的油畫的價錢的平均值及中位數。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 全距及 IQR。 <br>(b) 重新計算總和及中位數位置。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q12",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Loci", "Coordinate Geometry"],
        difficulty: 2,
        content: `圓 $C$ 通過點 $A(6,11)$ 且 $C$ 的圓心為點 $G(0,3)$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $C$ 的方程。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$P$ 為直角坐標平面上的一動點使得 $AP = GP$。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $\\mathit{\\Gamma}$ 的方程。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與線段 $AG$ 之間的幾何關係。 </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">若 $\\mathit{\\Gamma}$ 與 $C$ 相交於 $Q$ 及 $R$，求四邊形 $AQGR$ 的周界。 <br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用圓心及半徑求方程。 <br>(b) 垂直平分線；求交點後計算周界。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q13",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations", "Functions and Graphs"],
        difficulty: 1,
        content: `已知 $\\mathrm{f}(x)$ 為兩部分之和，一部分隨 $x^2$ 正變，而另一部分為常數。 假定 $\\mathrm{f}(2)=59$ 及 $\\mathrm{f}(7)=-121$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{f}(6)$。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$A(6, a)$ 及 $B(-6, b)$ 均為 $y=\\mathrm{f}(x)$ 的圖像上的點。 求 $\\Delta ABC$ 的面積，其中 $C$ 為 $x$ 軸上的一點。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $f(x)=Ax^2+B$，代入求係數。 <br>(b) 求 $a$、$b$ 後計算三角形面積。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q14",
        year: 2014,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `圖中顯示一容器，其形狀為一平截頭體。 該平截頭體是從一底半徑為 $72\\text {cm}$ 及高為 $96\\text {cm}$ 的倒置直立圓錐體切去其下部分造成。 該容器的高度為 $60\\text {cm}$。 將該容器放在一水平桌上。 現將一些水注入該容器內。 <u>偉明</u>得知該容器內的水深為 $28\\text {cm}$。<img src="img/2014dsep1q14.jpg" class="q-img" alt="題目附圖" style="max-width: 75%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該容器被浸濕的曲面面積，答案以 $\\pi$ 表示。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content"><u>偉明</u>宣稱該容器內的水的體積大於 $0.1\\text {m}^3$。 你是否同意？ 試解釋你的答案。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用相似比求浸濕曲面。 <br>(b) 計算水體積並比較。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q15",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `圖中的圖像顯示 $\\log_4 x$ 與 $\\log_8 y$ 之間的線性關係。 該圖像的斜率及在水平軸上的截距分別為 $\\dfrac{-1}{3}$ 及 $3$。 將 $x$ 與 $y$ 之間的關係表為 $y = Ax^k$ 的形式，其中 $A$ 及 $k$ 均為常數。 <span class="marks">(3分)</span><img src="img/2014dsep1q15.jpg" class="q-img" alt="題目附圖" style="max-width: 55%;">`,
        hint: `寫出直線方程後換底或化簡。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q16",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: `圖中，第 $1$ 個圖案包含 $3$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $2$ 粒點子所組成。 求 $m$ 的最小值使得首 $m$ 個圖案的點子總數超過 $6\\,888$。 <span class="marks">(4分)</span><img src="img/2014dsep1q16.jpg" class="q-img" alt="題目附圖" style="max-width: 65%;">`,
        hint: `寫出通項後求和，解不等式。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q17",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)", "Mensuration"],
        difficulty: 3,
        content: `圖 (a) 顯示以長方形為底的實心角錐體 $VABCD$，其中 $AB = 18\\text {cm}$ 、 $BC = 10\\text {cm}$ 、 $VB = VC = 30\\text {cm}$ 及 $\\angle VAB = \\angle VDC = 110^\\circ$。<img src="img/2014dsep1q17zh.jpg" class="q-img" alt="題目附圖" style="max-width: 95%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\angle VBA$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$P$、$Q$、$M$ 及 $N$ 分別為 $AB$、$CD$、$VB$ 及 $VC$ 的中點。 從 $VABCD$ 切去 $PBCQNM$ 造成一幾何模型，如圖 (b) 所示。 某工匠宣稱梯形 $PQNM$ 的面積小於 $70\\text {cm}^2$。 你是否同意？ 試解釋你的答案。 <span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用餘弦公式。 <br>(b) 求梯形各邊及高後計算面積。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q18",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities in Two Unknowns", "Linear Programming"],
        difficulty: 3,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">圖中，直線 $L_1$ 的方程為 $6x+7y=900$ 及直線 $L_2$ 的 $x$ 截距為 $180$。 $L_1$ 與 $L_2$ 相交於點 $(45, 90)$。 陰影區域（包括邊界在內）表示某不等式組的解。 求該不等式組。 <span class="marks">(4分)</span><img src="img/2014dsep1q18a.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某工廠生產 $X$ 及 $Y$ 兩款衣櫃。 每個 $X$ 衣櫃需 $6$ 工時裝嵌及 $2$ 工時包裝，而每個 $Y$ 衣櫃需 $7$ 工時裝嵌及 $3$ 工時包裝。 在某月，該工廠有 $900$ 工時可作裝嵌及 $360$ 工時可作包裝。 生產一個 $X$ 衣櫃及一個 $Y$ 衣櫃的利潤分別為 $\\$440$ 及 $\\$665$。 某工人宣稱該月的總利潤可超過 $\\$80\\,000$。 你是否同意？ 試解釋你的答案。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 從圖像讀取不等式。 <br>(b) 建立線性規劃模型求最大利潤。 `,
        solution: ``
    },
    {
        id: "2014-DSE-MATH-CP1-Q19",
        year: 2014,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability", "Permutations and Combinations"],
        difficulty: 3,
        content: `<u><u>佩玲</u></u>及<u>志偉</u>參與一含兩回合的遊戲。 在第一回合，<u>佩玲</u>及<u>志偉</u>輪流投擲一枚勻稱骰子。 首位擲得點數「3」的參與者勝出第一回合。 <u>佩玲</u>及<u>志偉</u>參與第一回合，直至其中一人勝出為止。 <u>佩玲</u>首先投擲骰子。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求<u>佩玲</u>勝出該遊戲第一回合的概率。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">在該遊戲的第二回合，球被逐一投入某部由八個管子並列所組成的裝置內（見圖）。 當球被投入該裝置時，它會隨機跌進其中一管子內。 每個管子最多可容納三個球。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
	  <col style="width: 3em; border-top: none;">
	  <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
      <col style="width: 3em; border-top: none;">
    </colgroup>
    <tr>
      <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
	  <td style="height: 100px; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none;"></td>
    </tr>
</table>這回合的參與者採納下列兩個選項中的一個。<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; width: 100%; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 5em;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border: 0px; text-align: left; vertical-align: top; padding: 3px 0px;">選項 1：</td>
      <td style="border: 0px; text-align: left; vertical-align: top; padding: 3px 0px;">將兩個球逐一投入該裝置內。 若該兩個球跌進同一管子內，則該參與者獲 $10$ 個代幣； 若該兩個球跌進兩個相鄰的管子內，則該參與者獲 $5$ 個代幣； 否則，該參與者不獲代幣。</td>
    </tr>
    <tr>
      <td style="border: 0px; text-align: left; vertical-align: top; padding: 3px 0px;">選項 2：</td>
      <td style="border: 0px; text-align: left; vertical-align: top; padding: 3px 0px;">將三個球逐一投入該裝置內。 若該三個球跌進同一管子內，則該參與者獲 $50$ 個代幣； 若該三個球跌進三個相鄰的管子內，則該參與者獲 $10$ 個代幣； 若該三個球跌進兩個相鄰的管子內，則該參與者獲 $5$ 個代幣； 否則，該參與者不獲代幣。</td>
    </tr>
  </table></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">若第二回合的參與者採納選項 1，求所獲代幣的數目的期望值。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">第二回合的參與者應採納哪一選項才使所獲代幣的數目的期望值達至最大？ 試解釋你的答案。 </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">只有第一回合的勝方參與第二回合。 已知第二回合的參與者採納能使所獲代幣的數目的期望值達至最大的選項。 <u>志偉</u>宣稱<u>佩玲</u>在該遊戲中不獲代幣的概率超過 $0.9$。 該宣稱是否正確？ 試解釋你的答案。 <br><span class="marks">(10分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 無限幾何級數求概率。 <br>(b) 計算各選項期望值後比較，再結合第一回合概率。 `,
        solution: ``
    }
);
