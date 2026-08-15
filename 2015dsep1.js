// 2015dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2015-DSE-MATH-CP1-Q01",
        year: "2015",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{m^9}{(m^3 n^{-7})^5}$，並以正指數表示答案。<span class="marks">(3分)</span>`,
        hint: `先展開分母指數，再應用指數定律。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q02",
        year: "2015",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Change of Subject"],
        difficulty: 1,
        content: `令 $b$ 成為公式 $\\dfrac{4a + 5b - 7}{b} = 8$ 的主項。 <span class="marks">(3分)</span>`,
        hint: `交叉相乘後解出 $b$。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q03",
        year: "2015",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 1,
        content: `$A$ 袋內有四張卡，該四張卡分別記有數字 $1$、$3$、$5$ 及 $7$； 而 $B$ 袋內有五張卡，該五張卡分別記有數字 $2$、$4$、$6$、$8$ 及 $10$。 若從每袋中各隨機抽出一張卡，求所抽出的兩數字之和小於 $9$ 的概率。 <span class="marks">(3分)</span>`,
        hint: `列出所有可能結果，數算和小於 $9$ 的情況。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q04",
        year: "2015",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$x^3 + x^2 y - 7x^2$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$x^3 + x^2 y - 7x^2 - x - y + 7$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 提取公因式。 <br>(b) 分組因式分解。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q05",
        year: "2015",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求同時滿足  $\\dfrac{7-3x}{5} \\le 2(x+2)$  及  $4x-13 > 0$  的 $x$ 值的範圍。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">寫出同時滿足 (a) 的不等式的最小整數。 <span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 分別解兩個不等式後取交集。 <br>(b) 從範圍中取最小整數。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q06",
        year: "2015",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `某書的成本為 $\\$250$。 現售出該書且盈利百分率為 $20\\%$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該書的售價。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若該書以其標價七五折售出，求該書的標價。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 成本 $\\times (1+20\\%)$。 <br>(b) 售價 $= $ 標價 $\\times 0.75$。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q07",
        year: "2015",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: `<u>佩玲</u>擁有蘋果的數目為<u>志偉</u>擁有的 $4$ 倍。 若<u>佩玲</u>將她其中的 $12$ 個蘋果送給<u>志偉</u>，他們將擁有相同數目的蘋果。 求<u>佩玲</u>和<u>志偉</u>擁有蘋果的總數。<span class="marks">(4分)</span>`,
        hint: `設志偉有 $x$ 個，佩玲有 $4x$ 個，列出方程。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q08",
        year: "2015",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Geometry (Triangles)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一圓。 $E$ 為 $AC$ 上的一點使得 $BC=CE$。 已知 $AB=AD$、$\\angle ADB=58^\\circ$ 及 $\\angle CBD=25^\\circ$。<img src="img/2015dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;">求 $\\angle BDC$ 及 $\\angle ABE$。 <span class="marks">(5分)</span>`,
        hint: `利用等腰三角形及圓內接四邊形性質。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q09",
        year: "2015",
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration", "Perimeters and Areas"],
        difficulty: 2,
        content: `某扇形的半徑及面積分別為 $12\\text{ cm}$ 及 $30\\pi\\text{ cm}^2$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該扇形的角。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">以 $\\pi$ 表該扇形的周界。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用扇形面積公式求角度。 <br>(b) 周界 $= $ 兩半徑 $+$ 弧長。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q10",
        year: "2015",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `當<u>素姍</u>在某月售出 $n$ 個手袋時，她該月的收入是 $\\$S$。 已知 $S$ 為兩部分之和，一部分為常數，而另一部分隨 $n$ 正變。 當 $n=10$ 時，$S=10\\,600$； 當 $n=6$ 時，$S=9\\,000$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">當<u>素姍</u>在某月售出 $20$ 個手袋時，求她該月的收入。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">當<u>素姍</u>在某月售出若干個手袋時，她該月的收入有沒有可能是 $\$18\\,000$？ 試解釋你的答案。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $S = A + Bn$，代入求係數。 <br>(b) 檢查 $n$ 是否為正整數。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q11",
        year: "2015",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials", "Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: `設 $\\mathrm{f}(x) = (x-2)^2(x+h) + k$，其中 $h$ 及 $k$ 均為常數。 當 $\\mathrm{f}(x)$ 除以 $x-2$ 時，餘數為 $-5$。 已知 $\\mathrm{f}(x)$ 可被 $x-3$ 整除。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $h$ 及 $k$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某人宣稱方程 $\\mathrm{f}(x)=0$ 所有的根均為整數。 你是否同意？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用餘數定理及因式定理求 $h$、$k$。 <br>(b) 展開後解方程檢查根。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q12",
        year: "2015",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion"],
        difficulty: 1,
        content: `下面的幹葉圖顯示足球學會的學生的體重（以 $\\text{kg}$ 為單位）的分佈。
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
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　2　3　3　3　3　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1　1　2　2　3　7　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3　5　8　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">8　9</td>
    </tr>    
  </table>
  <div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求上述分佈的平均值、中位數及分佈域。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">現再有兩名學生加入該學會。 得知體重的分佈的平均值及分佈域均增加 $1\\text{ kg}$。 求這兩名學生各人的體重。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 計算所有數據的平均、中位及全距。 <br>(b) 由平均值及分佈域變化求新數據。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q13",
        year: "2015",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Triangles)", "Geometry (Polygons)"],
        difficulty: 2,
        content: `圖中，$ABCD$ 為一正方形。 $E$ 及 $F$ 分別為 $BC$ 及 $CD$ 上的點使得 $AE=BF$。 $AE$ 與 $BF$ 相交於 $G$。<img src="img/2015dsep1q13.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ABE \\cong \\Delta BCF$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$\\Delta BGE$ 是否一直角三角形？ 試解釋你的答案。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">若 $CF=15\\text{ cm}$ 及 $EG=9\\text{ cm}$，求 $BG$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用正方形性質證明全等。 <br>(b) 檢查角度。 <br>(c) 用相似或畢氏定理。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q14",
        year: "2015",
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines", "Equations of Circles", "Coordinate Geometry"],
        difficulty: 3,
        content: `點 $P$ 及點 $Q$ 的坐標分別為 $(4, -1)$ 及 $(-14, 23)$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $L$ 為 $PQ$ 的垂直平分線。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $L$ 的方程。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">假定 $G$ 為 $L$ 上的一點。 將 $G$ 的 $x$ 坐標記為 $h$。 設 $C$ 為一圓，其圓心為 $G$ 且通過 $P$ 及 $Q$。 證明 $C$ 的方程為 $2x^2 + 2y^2 - 4hx - (3h+59)y + 13h - 93 = 0$。 <br><span class="marks">(6分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">點 $R$ 的坐標為 $(26, 43)$。 利用 (a)(ii)，或其他方法，求通過 $P$、$Q$ 及 $R$ 的圓的直徑。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 求中點及斜率後寫垂直平分線；代入圓方程證明。 <br>(b) 代入 $R$ 求 $h$ 後求直徑。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q15",
        year: "2015",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Standard Score"],
        difficulty: 1,
        content: `下表顯示一大群學生在數學考試及科學考試的得分的平均值及標準差：<table class="q-table" style="margin-top: 12px; margin-bottom: 12px; margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: 8em;">
      <col style="width: 8em;">
      <col style="width: 8em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">考試</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">平均值</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">標準差</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">數學</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$66$ 分</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$12$ 分</td>
    </tr>
	<tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">科學</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$52$ 分</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$10$ 分</td>
    </tr>
  </table><u>家華</u>在數學考試的標準分為 $-0.5$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求<u>家華</u>在數學考試的得分。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假設上述每一考試的得分均為正態分佈。 <u>家華</u>在科學考試得 $49$ 分。 他宣稱相對於其他學生，他在科學考試的表現較數學考試為佳。 該宣稱是否正確？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用標準分公式反求得分。 <br>(b) 比較兩科標準分。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q16",
        year: "2015",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations", "Probability"],
        difficulty: 1,
        content: `某盒子內有 $5$ 個紅色碗、$6$ 個黃色碗及 $3$ 個白色碗。 若從該盒子中隨機同時抽出 $4$ 個碗，<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求抽出恰好 $2$ 個紅色碗的概率；<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求抽出至少 $2$ 個紅色碗的概率。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `用組合數計算。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q17",
        year: "2015",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences", "Exponential Functions and Logarithm Functions"],
        difficulty: 3,
        content: `對任意正整數 $n$，設 $\\mathrm{A}(n) = 4n - 5$ 及 $\\mathrm{B}(n) = 10^{4n-5}$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $n$ 表 $\\mathrm{A}(1) + \\mathrm{A}(2) + \\mathrm{A}(3) + \\cdots + \\mathrm{A}(n)$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求 $n$ 的最大值使得 $\\log\\bigl(\\mathrm{B}(1)~\\mathrm{B}(2)~\\mathrm{B}(3)~\\cdots~\\mathrm{B}(n)\\bigr) \\le 8\\,000$。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 等差數列求和。 <br>(b) 對數性質化簡後解不等式。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q18",
        year: "2015",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs", "Quadratic Equations in One Unknown", "Loci"],
        difficulty: 3,
        content: `設 $\\mathrm{f}(x) = 2x^2 - 4kx + 3k^2 + 5$，其中 $k$ 為一實常數。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$y = \\mathrm{f}(x)$ 的圖像是否與 $x$ 軸相交？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">利用配方法，以 $k$ 表 $y = \\mathrm{f}(x)$ 的圖像的頂點的坐標。 <span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">在同一直角坐標系中，設 $S$ 及 $T$ 分別為 $y = \\mathrm{f}(x)$ 的圖像及 $y = 2 - \\mathrm{f}(x)$ 的圖像上的動點。 將原點記為 $O$。 某人宣稱當 $S$ 與 $T$ 最接近時，$\\Delta OST$ 的外心在 $x$ 軸上。 該宣稱是否正確？ 試解釋你的答案。 <span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 判別式檢查。 <br>(b) 配方求頂點。 <br>(c) 分析最接近情況的幾何關係。 `,
        solution: ``
    },
    {
        id: "2015-DSE-MATH-CP1-Q19",
        year: "2015",
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)", "Mensuration"],
        difficulty: 3,
        content: `圖 (a) 中，$ABCDB'$ 為邊形紙卡。 已知 $AB = AB' = 40\\text{ cm}$ 、 $BC = B'D = 24\\text{ cm}$ 及 $\\angle ABC = \\angle AB'D = 80^\\circ$。<img src="img/2015dsep1q19zh.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">假定 $105^\\circ \\le \\angle BCD \\le 145^\\circ$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">求 $A$ 與 $C$ 間的距離。 </div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $\\angle ACB$。 </div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">描述當 $\\angle BCD$ 由 $105^\\circ$ 增加至 $145^\\circ$ 期間該紙卡的面積如何變化。 試解釋你的答案。 <br><span class="marks">(7分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $\\angle BCD = 132^\\circ$。 將圖 (a) 中的紙卡沿 $AC$ 及 $AD$ 摺起，使得 $AB$ 與 $AB'$ 連接成角錐體 $ABCD$，如圖 (b) 所示。 求角錐體 $ABCD$ 的體積。 <span class="marks">(6分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用餘弦公式及正弦公式；分析面積變化。 <br>(b) 求底面積及高後計算體積。 `,
        solution: ``
    }
);
