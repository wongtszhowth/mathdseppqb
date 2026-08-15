// 2017dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2017-DSE-MATH-CP1-Q01",
        year: "2017",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `令 $y$ 成為公式 $k = \\dfrac{3x - y}{y}$ 的主項。 <span class="marks">(3分)</span>`,
        hint: `交叉相乘後解出 $y$。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q02",
        year: "2017",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{(m^4 n^{-1})^3}{(m^{-2})^5}$，並以正指數表示答案。 <span class="marks">(3分)</span>`,
        hint: `先展開指數，再應用指數定律。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q03",
        year: "2017",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$x^2 - 4xy + 3y^2$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$x^2 - 4xy + 3y^2 + 11x - 33y$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 十字相乘。 <br>(b) 分組或利用 (a) 的結果。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q04",
        year: "2017",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: `某劇院只有兩類門票：正價票及特惠票。 正價票及特惠票的票價分別為 $\$126$ 及 $\$78$。 在某日，售出正價票的數目為售出特惠票的數目之 $5$ 倍，且售出門票所得的總金額為 $\$50\\,976$。 求在該日售出門票的總數。 <span class="marks">(4分)</span>`,
        hint: `設特惠票數目為 $x$，正價票為 $5x$，列出方程求解。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q05",
        year: "2017",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求同時滿足 $7(x-2) \\le \\dfrac{11x+8}{3}$ 及 $6-x < 5$ 的 $x$ 值的範圍。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">有多少個整數同時滿足 (a) 的不等式？<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 分別解兩個不等式後取交集。 <br>(b) 從範圍中數算整數個數。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q06",
        year: "2017",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 1,
        content: `點 $A$ 及點 $B$ 的坐標分別為 $(-3, 4)$ 及 $(9, -9)$。 $A$ 繞原點逆時針方向旋轉 $90^\\circ$ 至 $A'$。 $B'$ 為 $B$ 對 $x$ 軸的反射影像。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出 $A'$ 及 $B'$ 的坐標。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">證明 $AB$ 垂直於 $A'B'$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 應用旋轉及反射公式。 <br>(b) 計算斜率乘積是否為 $-1$。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q07",
        year: "2017",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Probability"],
        difficulty: 1,
        content: `下面的圓形圖顯示某校學生出生季節的分佈。<img src="img/2017dsep1q07zh.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;"><div style="text-align: center;">該校學生出生季節的分佈</div>若從該校中隨機選出一名學生，則所選出的學生在春季出生的概率為 $\\dfrac{1}{9}$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $x$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該校有 $180$ 名學生在冬季出生。 求該校學生的人數。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 由概率求春季角度。 <br>(b) 由冬季人數及角度比例求總人數。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q08",
        year: "2017",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `已知 $y$ 隨 $\\sqrt{x}$ 反變。 當 $x=144$ 時，$y=81$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $x$ 表 $y$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若 $x$ 的值由 $144$ 增加至 $324$，求 $y$ 的值的改變。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $y = \\dfrac{k}{\\sqrt{x}}$，代入求 $k$。 <br>(b) 計算新 $y$ 值後求差。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q09",
        year: "2017",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: `若一個瓶子的容量量得 $200\\text{ mL}$ 準確至最接近的 $10\\text{ mL}$，則稱它為<i>標準</i>。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求一個<i>標準</i>瓶子的最小可取容量。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱 $120$ 個<i>標準</i>瓶子的總容量可量得 $23.3\\text{ L}$ 準確至最接近的 $0.1\\text{ L}$。 你是否同意？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 考慮誤差範圍的下限。 <br>(b) 計算總誤差範圍並比較。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q10",
        year: "2017",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Geometry (Circles)", "Mensuration"],
        difficulty: 2,
        content: `圖中，$OPQR$ 為四邊形使得 $OP = OQ = OR$。 $OQ$ 與 $PR$ 相交於點 $S$。 $S$ 為 $PR$ 的中點。<img src="img/2017dsep1q10.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta OPS \\cong \\Delta ORS$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">已知 $O$ 為通過 $P$、$Q$ 及 $R$ 的圓的圓心。 若 $OQ = 6\\text{ cm}$ 及 $\\angle PRQ = 10^\\circ$，求扇形 $OPQR$ 的面積，答案以 $\\pi$ 表示。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用等長及中點性質證明全等。 <br>(b) 求扇形角度後計算面積。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q11",
        year: "2017",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion", "Probability"],
        difficulty: 1,
        content: `下面的幹葉圖顯示一群工人的時薪（以元為單位）的分佈。
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
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1　1　1　3　4　6　8　9　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$a$　7　7　8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1　$b$</td>
    </tr>
</table>
已知上述分佈的平均值及分佈域分別為 $\\$70$ 及 $\\$22$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求上述分佈的中位數及標準差。 <span class="marks">(5分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若從該群中隨機選出一名工人，求所選出的工人的時薪超過 $\\$70$ 的概率。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 由平均值及分佈域求 $a$、$b$，再求中位數與標準差。 <br>(b) 計算超過 70 的人數比例。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q12",
        year: "2017",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `把一底面積為 $84\\text{ cm}^2$ 及高為 $20\\text{ cm}$ 的實心金屬直立角柱體熔化，並重鑄成兩個相似的實心直立角錐體。 該兩個角錐體的底均為正方形。 較小的角錐體的底面積與較大的角錐體的底面積之比為 $4:9$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求較大的角錐體的體積。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若較大的角錐體的高為 $12\\text{ cm}$，求較小的角錐體的總表面面積。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 體積守恆及相似比求體積。 <br>(b) 用相似比求較小角錐尺寸後計算總表面面積。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q13",
        year: "2017",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Coordinate Geometry"],
        difficulty: 2,
        content: `點 $E$、點 $F$ 及點 $G$ 的坐標分別為 $(-6,5)$、$(-3,11)$ 及 $(2,-1)$。 圓 $C$ 通過 $E$ 且 $C$ 的圓心為 $G$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $C$ 的方程。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">證明 $F$ 在 $C$ 以外。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">設 $H$ 為 $C$ 上的一動點。 當 $H$ 最遠離 $F$ 時，</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">描述 $F$、$G$ 與 $H$ 之間的幾何關係；</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求通過 $F$ 及 $H$ 的直線的方程。 <br><span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用圓心及一點求方程。 <br>(b) 比較距離與半徑。 <br>(c) 最遠點在 $FG$ 延長線上。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q14",
        year: "2017",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 3,
        content: `設 $\\mathrm{f}(x) = 6x^3 - 13x^2 - 46x + 34$。 當 $\\mathrm{f}(x)$ 除以 $2x^2 + ax + 4$ 時，商式及餘式分別為 $3x + 7$ 及 $bx + c$，其中 $a$、$b$ 及 $c$ 均為常數。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $a$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $\\mathrm{g}(x)$ 為二次多項式使得當 $\\mathrm{g}(x)$ 除以 $2x^2 + ax + 4$ 時，餘式為 $bx + c$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">證明 $\\mathrm{f}(x) - \\mathrm{g}(x)$ 可被 $2x^2 + ax + 4$ 整除。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{f}(x) - \\mathrm{g}(x) = 0$ 所有的根均為整數。 你是否同意？ 試解釋你的答案。 <br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 比較係數或長除求 $a$。 <br>(b) 利用餘式相同證明整除，再分析根。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q15",
        year: "2017",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `設 $a$ 及 $b$ 均為常數。 將 $y = a + \\log_b x$ 的圖像記為 $G$。 $G$ 的 $x$ 截距為 $9$ 且 $G$ 通過點 $(243, 3)$。 以 $y$ 表 $x$。 <span class="marks">(4分)</span>`,
        hint: `利用 $x$ 截距及已知點求 $a$、$b$，再反求 $x$。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q16",
        year: "2017",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 3,
        content: `某城市採納從另一城市輸入食水的計劃。 已知自該計劃開始起計的第 $1$ 年所輸入的食水量為 $1.5 \\times 10^7\\text{ m}^3$，並且在隨後各年裏，每年所輸入的食水量均較前一年所輸入的食水量少 $10\\%$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求自該計劃開始起計的首 $20$ 年所輸入的總食水量。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱自該計劃開始起計所輸入的總食水量不會超過 $1.6 \\times 10^8\\text{ m}^3$。 你是否同意？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 等比數列求和。 <br>(b) 求無窮級數總和比較。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q17",
        year: "2017",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 1,
        content: `某袋子內有 $4$ 枝綠筆、$7$ 枝藍筆及 $8$ 枝黑筆。 若從該袋子中隨機同時抽出 $5$ 枝筆，<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求抽出恰好 $4$ 枝綠筆的概率；<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求抽出恰好 $3$ 枝綠筆的概率；<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">求抽出不多於 $2$ 枝綠筆的概率。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `用組合數計算各情況概率。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q18",
        year: "2017",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs", "Quadratic Equations in One Unknown"],
        difficulty: 3,
        content: `拋物線 $\\mathit{\\Gamma}$ 的方程為 $y = 2x^2 - 2kx + 2x - 3k + 8$，其中 $k$ 為一實常數。 將直線 $y = 19$ 記為 $L$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $L$ 與 $\\mathit{\\Gamma}$ 相交於兩相異點。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$L$ 與 $\\mathit{\\Gamma}$ 的交點為 $A$ 及 $B$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">設 $a$ 及 $b$ 分別為 $A$ 及 $B$ 的 $x$ 坐標。 證明 $(a-b)^2 = k^2 + 4k + 23$。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$A$ 與 $B$ 間的距離有沒有可能少於 $4$？ 試解釋你的答案。 <br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 聯立後判別式 $>0$。 <br>(b) 用根與係數關係證明，再比較距離。 `,
        solution: ``
    },
    {
        id: "2017-DSE-MATH-CP1-Q19",
        year: "2017",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Trigonometry (3D)"],
        difficulty: 3,
        content: `$ABC$ 為三角形金屬薄片，其中 $BC = 24\\text{ cm}$ 、 $\\angle BAC = 30^\\circ$ 及 $\\angle ACB = 42^\\circ$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $AC$ 的長度。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">圖中，把金屬薄片 $ABC$ 懸掛使得只有頂點 $B$ 位於水平地面上。 $D$ 及 $E$ 均為水平地面上的點，且分別鉛垂於頂點 $A$ 及頂點 $C$ 之下。 $AC$ 的延線與水平地面相交於點 $F$。 某工匠得知 $AD = 10\\text{ cm}$ 及 $CE = 2\\text{ cm}$。<img src="img/2017dsep1q19b.jpg" class="q-img" alt="題目附圖" style="max-width: 80%;"></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $C$ 與 $F$ 間的距離。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\Delta ABF$ 的面積。 </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">求金屬薄片 $ABC$ 與水平地面間的傾角。 </div></div><div class="q-line q-level-2"><span class="q-label">(iv)</span><div class="q-text-content">該工匠宣稱 $\\Delta BDF$ 的面積大於 $460\\text{ cm}^2$。 你是否同意？ 試解釋你的答案。 <br><span class="marks">(11分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用正弦公式。 <br>(b) 用三角及立體幾何求各量。 `,
        solution: ``
    }
);
