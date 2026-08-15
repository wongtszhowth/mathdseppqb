// 2019dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據

questions.push(
    {
        id: "2019-DSE-MATH-CP1-Q01",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Formulae"],
        difficulty: 1,
        content: `令 $h$ 成為公式 $9(h+6k)=7h+8$ 的主項。 <span class="marks">(3分)</span>`,
        hint: `展開後將含 $h$ 的項移到一邊，再解出 $h$。 `,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q02",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Algebraic Fractions"],
        difficulty: 1,
        content: `化簡 $\\dfrac{3}{7x-6} - \\dfrac{2}{5x-4}$。 <span class="marks">(3分)</span>`,
        hint: `通分後合併分子。 `,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q03",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Pythagoras Theorem"],
        difficulty: 1,
        content: `一長方形的長及闊分別為 $24\\text{ cm}$ 及 $(13+r)\\text{ cm}$。 若該長方形的對角線的長度為 $(17-3r)\\text{ cm}$，求 $r$。 <span class="marks">(3分)</span>`,
        hint: `利用畢氏定理列出方程求解。 `,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q04",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: `因式分解<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$4m^2 - 9$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$2m^2n + 7mn - 15n$，<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">$4m^2 - 9 - 2m^2n - 7mn + 15n$。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 平方差。 <br>(b) 提取公因式後十字相乘。 <br>(c) 分組或利用前兩部分結果。 `,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q05",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `某錢包以其標價七五折售出。 該錢包的售價為 $\\$690$。 <br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該錢包的標價。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">售出該錢包後，盈利百分率為 $15\\%$。 求該錢包的成本。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 售價 = 標價 × 0.75。 <br>(b) 由售價及盈利百分率反求成本。`,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q06",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Inequalities"],
        difficulty: 1,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解不等式 $\\dfrac{7x+26}{4} \\le 2(3x-1)$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求同時滿足不等式 $\\dfrac{7x+26}{4} \\le 2(3x-1)$ 及不等式 $45-5x \\ge 0$ 的整數的數目。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 解不等式求範圍。 <br>(b) 取交集後數算整數個數。`,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q07",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Cardinality"],
        topic: ["Ratio"],
        difficulty: 1,
        content: `在某遊樂場，成人人數與小童人數之比為 $13:6$。 若 $9$ 名成人和 $24$ 名小童進入該遊樂場，則成人人數與小童人數之比為 $8:7$。 求在該遊樂場原本的成人人數。 <span class="marks">(4分)</span>`,
        hint: `設原本成人為 $13k$、小童為 $6k$，列出方程求解。`,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q08",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Statistics"],
        difficulty: 1,
        content: `下面的圓形圖顯示一群女生擁有指環的數目的分佈。
        <img src="img/2019dsep1q08zh.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;">
        <div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">寫出該分佈的眾數。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">求該分佈的平均值。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(c)</span><div class="q-text-content">若從該群中隨機選出一名女生，求所選出的女生擁有多於 $3$ 枚指環的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 最大扇形對應的數目。 <br>(b) 先由角度求各部分比例及總人數，再計算加權平均。 <br>(c) 多於 3 的比例。`,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q09",
        year: 2019,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `某兩球體的體積之和為 $324\\pi\\text{ cm}^3$。 較大的球體的半徑等於較小的球體的直徑。 以 $\\pi$ 表<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">較大的球體的體積，<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該兩球體的表面面積之和。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `設小圓半徑為 $r$，則大圓半徑為 $2r$，列出體積方程求解。`,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q10",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 1,
        content: `已知 $\\mathrm{h}(x)$ 的一部分為常數，另一部分則隨 $x$ 正變。 假定 $\\mathrm{h}(-2) = -96$ 及 $\\mathrm{h}(5) = 72$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{h}(x)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">解方程 $\\mathrm{h}(x) = 3x^2$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $\\mathrm{h}(x) = A + Bx$，代入已知值。 <br>(b) 代入後解二次方程。`,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q11",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials"],
        difficulty: 2,
        content: `設 $\\mathrm{p}(x)$ 為三次多項式。 當 $\\mathrm{p}(x)$ 除以 $x-1$ 時，餘數為 $50$。 當 $\\mathrm{p}(x)$ 除以 $x+2$ 時，餘數為 $-52$。 已知 $\\mathrm{p}(x)$ 可被 $2x^2+9x+14$ 整除。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求當 $\\mathrm{p}(x)$ 除以 $2x^2+9x+14$ 時的商式。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">方程 $\\mathrm{p}(x)=0$ 有多少個有理根？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設商式為線性式，利用餘數條件求係數。<br>(b) 寫出 $\\mathrm{p}(x)$ 後檢查有理根。`,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q12",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Dispersion"],
        difficulty: 1,
        content: `下面的幹葉圖顯示一些男生在 $400\\text{ m}$ 賽跑的成績（以秒為單位）的分佈。
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
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$a$</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　0　3　$c$　$c$　8　9　9　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　1　1　1　2　2　5　6　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$b$</td>
    </tr>
</table>
已知該分佈的四分位數間距為 $8$ 秒。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $c$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">已知該分佈的分佈域超過 $34$ 秒且該分佈的平均值為 $69$ 秒。求<br></div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$a$ 及 $b$，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">該分佈的最小可取標準差。<br><span class="marks">(6分)</span></div></div><div class="q-clearfix"></div>`,
        hint: `(a) 由 IQR 求 $c$。 <br>(b) 由平均值及分佈域條件求 $a$、$b$，再計算最小標準差。`,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q13",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry of Circles"],
        difficulty: 2,
        content: `圖中，$O$ 為圓 $ABCDE$ 的圓心。 $AC$ 為該圓的一直徑。 $BD$ 與 $OC$ 相交於點 $F$。 已知 $\\angle AED = 115^\\circ$。
        <img src="img/2019dsep1q13.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;">
        <div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\angle CBF$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $BC // OD$ 及 $OB = 18\\text{ cm}$。 扇形 $OBC$ 的周界是否少於 $60\\text{ cm}$？ 試解釋你的答案。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用圓周角、圓心角及三角形性質。 <br>(b) 求扇形角度後計算弧長與半徑和。`,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q14",
        year: 2019,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Plane Geometry"],
        difficulty: 3,
        content: `圖中，$ABCD$ 為一正方形。 已知 $E$ 為 $AD$ 上的一點。 $BD$ 與 $CE$ 相交於點 $F$。 設 $G$ 為一點使得 $BG // EC$ 及 $CG // DB$。
        <img src="img/2019dsep1q14.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;">
<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$\\Delta BCG \\cong \\Delta CBF$，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$\\Delta BCF \\sim \\Delta DEF$。 <br><span class="marks">(4分)</span></div></div><div class="q-clearfix"></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $\\angle BCF = \\angle BGC$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">設 $BC = \\ell$。 以 $\\ell$ 表 $DF$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">某人宣稱 $AE \\gt DF$。 你是否同意？ 試解釋你的答案。 <br><span class="marks">(4分)</span></div></div><div class="q-clearfix"></div>`,
        hint: `(a) 利用平行線及正方形性質證明全等與相似。 <br>(b) 設邊長後用相似比求長度比較。 `,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q15",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutation and Combination"],
        difficulty: 1,
        content: `某班有 $21$ 名男生及 $11$ 名女生。 若從該班中選出 $5$ 名學生組成一個有至少 $1$ 名男生的委員會，則可組成多少個不同的委員會？<span class="marks">(3分)</span>`,
        hint: `總選法減去全女生的選法。 `,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q16",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Simultaneous Equations", "Sequences"],
        difficulty: 3,
        content: `設 $\\alpha$ 及 $\\beta$ 均為實數使得 $\\begin{cases} \\beta = 5\\alpha - 18 \\\\[1.2ex] \\beta = \\alpha^2 - 13\\alpha + 63 \\end{cases}$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\alpha$ 及 $\\beta$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某等差數列的第 $1$ 項及第 $2$ 項分別為 $\\log \\alpha$ 及 $\\log \\beta$。 求 $n$ 的最小值使得該數列的首 $n$ 項之和大於 $888$。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 聯立方程求解。 <br>(b) 求公差後用等差數列求和公式解不等式。 `,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q17",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry", "Loci"],
        difficulty: 3,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $a$ 及 $p$ 分別為 $\\Delta CDE$ 的面積及周界。 將 $\\Delta CDE$ 的內切圓的半徑記為 $r$。 證明 $pr = 2a$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">點 $H$ 及點 $K$ 的坐標分別為 $(9,12)$ 及 $(14,0)$。 設 $P$ 為直角坐標平面上的一動點使得由 $P$ 至 $OH$ 的垂直距離等於由 $P$ 至 $HK$ 的垂直距離，其中 $O$ 為原點。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與 $\\angle OHK$ 之間的幾何關係。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">利用 (a)，求 $\\mathit{\\Gamma}$ 的方程。<br><span class="marks">(5分)</span></div></div><div class="q-clearfix"></div>`,
        hint: `(a) 面積公式 $a = rs$ 其中 $s$ 為半周界。 <br>(b) 軌跡為角平分線，利用距離公式或面積關係求方程。 `,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q18",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry"],
        difficulty: 3,
        content: `圖中顯示四面體 $ABCD$。 設 $P$ 為 $AD$ 上的一點使得 $BP$ 垂直於 $AD$。 某工匠得知 $AC = AD = CD = 13\\text{ cm}$ 、 $BC = 8\\text{ cm}$ 、 $BD = 12\\text{ cm}$ 及 $\\angle ABD = 72^\\circ$。
        <img src="img/2019dsep1q18.jpg" class="q-img" alt="題目附圖" style="max-width: 90%;">
        <div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">$\\angle BAD$，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$CP$。<br><span class="marks">(5分)</span></div></div><div class="q-clearfix"></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該工匠宣稱 $\\angle BPC$ 為面 $ABD$ 與面 $ACD$ 間的交角。 該宣稱是否正確？ 試解釋你的答案。 <span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用餘弦公式及正弦公式求角與長度。 <br>(b) 檢查 $BP$ 是否垂直於交線 $AD$。 `,
        solution: ``
    },
    {
        id: "2019-DSE-MATH-CP1-Q19",
        year: 2019,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Functions", "Coordinate Geometry"],
        difficulty: 3,
        content: `設 $f(x) = \\dfrac{1}{1+k}\\bigl(x^2 + (6k-2)x + (9k+25)\\bigr)$，其中 $k$ 為一正常數。 將點 $(4,33)$ 記為 $F$。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $y=\\mathrm{f}(x)$ 的圖像通過 $F$。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將 $y=\\mathrm{f}(x)$ 的圖像對 $y$ 軸反射，然後將所得的圖像向上平移 $4$ 單位得出 $y=\\mathrm{g}(x)$ 的圖像。 設 $U$ 為 $y=\\mathrm{g}(x)$ 的圖像的頂點。 將原點記為 $O$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">利用配方法，以 $k$ 表 $U$ 的坐標。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">求 $k$ 使得通過 $F$、$O$ 及 $U$ 的圓的面積最小。</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">對任意正常數 $k$，$y=\\mathrm{g}(x)$ 的圖像均通過同一點 $G$。 設 $V$ 為 $y=\\mathrm{g}(x)$ 的圖像的頂點使得通過 $F$、$O$ 及 $V$ 的圓的面積最小。 $F$、$G$、$O$ 與 $V$ 是否共圓？ 試解釋你的答案。 <br><span class="marks">(11分)</span></div></div><div class="q-clearfix"></div>`,
        hint: `(a) 代入 $x=4$ 驗證。 <br>(b) 先求 $\\mathrm{g}(x)$，配方找頂點，再求最小面積對應的 $k$，最後檢查共圓條件。`,
        solution: ``
    }
);
