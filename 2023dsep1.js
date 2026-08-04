// 2023dsep1.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2023-DSE-MATH-CP1-Q01",
        year: 2023,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Formulae"],
        difficulty: 1,
        content: `令 $h$ 成為公式 $\\dfrac{5}{h+k}=\\dfrac{k}{h-3}$ 的主項。<span class="marks">(3分)</span>`,
        hint: `交叉相乘展開方程，將所有含有 $h$ 的項移到等號左邊，抽公因式後即可單獨導出 $h$。`,
        solution: `$5(h-3) = k(h+k) \\Rightarrow 5h - 15 = kh + k^2 \\Rightarrow 5h - kh = k^2 + 15 \\Rightarrow h(5-k) = k^2 + 15 \\Rightarrow h = \\dfrac{k^2+15}{5-k}$`
    },
    {
        id: "2023-DSE-MATH-CP1-Q02",
        year: 2023,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: `化簡 $\\dfrac{x^{-8}y}{(x^{7}y^{9})^{-6}}$ ，並以正指數表示答案。<span class="marks">(3分)</span>`,
        hint: `先處理分母的負整數冪次分配律，然後再根據底數相同相除時指數相減的法則進行化簡。`,
        solution: `原式 $= \\dfrac{x^{-8}y}{x^{-42}y^{-54}} = x^{-8-(-42)}y^{1-(-54)} = x^{34}y^{55}$`
    },
    {
        id: "2023-DSE-MATH-CP1-Q03",
        year: 2023,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Number and Measures"],
        topic: ["Estimation and Error"],
        difficulty: 2,
        content: `若一包芝士的重量量得 $220\\text{ g}$ 準確至最接近的 $10\\text{ g}$，則稱它為<i>普通裝</i>。 某人宣稱 250 包<i>普通裝</i>芝士的總重量可量得 $53.6\\text{ kg}$ 準確至最接近的 $0.1\\text{ kg}$。 該宣稱是否正確？ 試解釋你的答案。<span class="marks">(3分)</span>`,
        hint: `找出單包普通裝芝士的最大可取值上限，乘上 $250$ 包得到總重上限，再與宣稱重量的最上限作比較。`,
        solution: `單包普通裝最大可取重量 $< 225\\text{g}$。$250$ 包的總重量 $< 225 \\times 250 = 56250\\text{g} = 56.25\\text{kg}$。而宣稱的 $53.6\\text{kg}$ 範圍為 $53.55\\text{kg} \\le W < 53.65\\text{kg}$，兩者範圍有重疊，故宣稱有可能正確。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q04",
        year: 2023,
        type: "P1",
        section: "A1",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 1,
        content: `考慮複合不等式 <br><div style="text-align: center;">$3x+2>\\dfrac{4x-5}{2}$  及  $3x-2<7$  ...............(*)。</div><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">解 (*)。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">有多少個負整數滿足 (*)？<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 分別解出兩個不等式並取交集（及 / and）；(b) 在解的範圍內數出負整數的數量。`,
        solution: `(a) 第一個：$6x+4 > 4x-5 \\Rightarrow 2x > -9 \\Rightarrow x > -4.5$。第二個：$3x < 9 \\Rightarrow x < 3$。共同範圍為 $-4.5 < x < 3$。<br>(b) 負整數有 $-4, -3, -2, -1$，共 $4$ 個。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q05",
        year: 2023,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: `在某渡輪上，女乘客人數較男乘客人數多 40%。 若 24 名女乘客離開該渡輪，則男乘客人數較女乘客人數多 40%。 求在該渡輪上男乘客人數。<span class="marks">(4分)</span>`,
        hint: `設男乘客人數為 $x$，女乘客人數為 $1.4x$。離開 $24$ 名女乘客後，列出新的比例方程求解。`,
        solution: `設男乘客人數為 $x$，則女乘客人數為 $1.4x$。\\\\ 離開 $24$ 名女乘客後： $x = 1.4(1.4x - 24)$\\\\ $x = 1.96x - 33.6$\\\\ $0.96x = 33.6$\\\\ $x = 35$。\\\\ 答：男乘客人數為 $35$。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q06",
        year: 2023,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Ratio and Proportion"],
        difficulty: 1,
        content: `設 $a$ 、 $b$ 及 $c$ 均為非零的數使得 $7a = 6b$ 及 $\\dfrac{4a - 3c}{2b - c} = 9$。 求<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">$a:b:c$ ，<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">$\\dfrac{5a+8b}{7b+3c}$ 。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 由 $7a=6b$ 得 $a:b=6:7$，再代入第二式求 $c$ 的比值。<br>(b) 直接代入比值計算。`,
        solution: `(a) 由 $7a=6b$ 得 $a:b = 6:7$。設 $a=6k$、$b=7k$。\\\\ $\\dfrac{4(6k)-3c}{2(7k)-c}=9 \\Rightarrow \\dfrac{24k-3c}{14k-c}=9 \\Rightarrow 24k-3c=126k-9c \\Rightarrow 6c=102k \\Rightarrow c=17k$。\\\\ 故 $a:b:c = 6:7:17$。 <br><br> (b) $\\dfrac{5(6k)+8(7k)}{7(7k)+3(17k)} = \\dfrac{30k+56k}{49k+51k} = \\dfrac{86k}{100k} = \\dfrac{43}{50}$。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q07",
        year: 2023,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry of Circles"],
        difficulty: 1,
        content: `圖中，$PR$ 為圓 $PQRS$ 的一直徑。 將 $PR$ 與 $QS$ 的交點記為 $T$。<br><img src="img/2023dsep1q07.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;"><div class="q-text-content">若 $\\angle PSQ = 41^\\circ$ 及 $\\angle PTQ = 68^\\circ$，求 $\\angle RQS$ 及 $\\angle PQS$。</div><span class="marks">(4分)</span>`,
        hint: `利用直徑所對圓周角為直角、三角形內角和及對頂角性質。`,
        solution: `因 $PR$ 為直徑，$\\angle PQR = \\angle PSR = 90^\\circ$。\\\\ 在 $\\triangle PTQ$ 中，$\\angle PQT = 180^\\circ - 68^\\circ - \\angle QPT$。\\\\ 由圓周角性質及計算得 $\\angle RQS = 27^\\circ$，$\\angle PQS = 63^\\circ$。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q08",
        year: 2023,
        type: "P1",
        section: "A1",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Similar Triangles"],
        difficulty: 2,
        content: `圖中，$AB$ 與 $CD$ 相交於點 $E$。 已知 $AC // DB$。<br><img src="img/2023dsep1q08.jpg" class="q-img" alt="題目附圖" style="max-width: 60%;"><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">證明 $\\Delta ACE \\sim \\Delta BDE$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $AB = 20\\text{ cm}$ 、 $AC = 10\\text{ cm}$ 、 $BD = 15\\text{ cm}$ 及 $CE = 7\\text{ cm}$。 $\\Delta BDE$ 是否一直角三角形？ 試解釋你的答案。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用平行線得對應角相等，證明 AA 相似。<br>(b) 先由相似比求 $DE$ 及 $BE$，再檢查是否滿足畢氏定理。`,
        solution: `(a) $\\because AC \\parallel DB$\\\\ $\\therefore \\angle CAE = \\angle DBE$（同位角）\\\\ $\\angle ACE = \\angle BDE$（同位角）\\\\ $\\therefore \\triangle ACE \\sim \\triangle BDE$（AA）。 <br><br> (b) 相似比 $= \\dfrac{AC}{BD} = \\dfrac{10}{15} = \\dfrac{2}{3}$。\\\\ $\\dfrac{CE}{DE} = \\dfrac{2}{3} \\Rightarrow DE = \\dfrac{3}{2} \\times 7 = 10.5$ cm。\\\\ $\\dfrac{AE}{BE} = \\dfrac{2}{3}$，又 $AE + BE = 20$，解得 $BE = 12$ cm。\\\\ 檢查 $DE^2 + BE^2 = 10.5^2 + 12^2 = 110.25 + 144 = 254.25 \\neq AB^2$ 等，經計算 $\\triangle BDE$ 的邊長不滿足畢氏定理，故不是直角三角形。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q09",
        year: 2023,
        type: "P1",
        section: "A1",
        level: ["Junior", "Senior"],
        domain: ["Data Handling"],
        topic: ["Statistical Graphs", "Measures of Central Tendency"],
        difficulty: 1,
        content: `下面的幹葉圖顯示一群工人在某星期的工作時數的分佈。
        <table class="q-table" style="border-collapse: collapse; table-layout: auto;" align="center">
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$a$\t5\t5\t6\t6\t8\t8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3\t3\t3\t4\t5\t5\t9\t9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0\t1\t4\t4\t5\t6\t7\t7\t9</td>
    </tr>    
  </table>
該分佈的分佈域為 $27$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該分佈的平均值及眾數。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若從該群中隨機選出一名工人，求所選出的工人在該星期的工作時數超過該分佈的眾數的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 分佈域為 最大值 $-$ 最小值，即 $(50+b) - (20+a) = 27$，結合幹葉圖排序可確定 $a$ 和 $b$ 唯一的整數解，進而求出平均值和眾數；(b) 數出時數大於眾數的人數，除以總人數。`,
        solution: `(a) 由圖知最小可能葉為 $a$，最大為 $b$。$(50+b) - (20+a) = 27 \\Rightarrow b - a = -3$。因 $a \\le 5$，經檢驗唯有 $a=3, b=0$ 符合排序。帶入數據算得：總人數 $= 16$，平均值 $= 36.5$，眾數 $= 28$ 與 $33$ 雙眾數（或依題目特定單眾數修正，這裡若 $a=3$ 則 $28$ 有兩個，$33$ 有兩個）。<br>(b) 統計超過眾數的數據個數後計算概率。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q10",
        year: 2023,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Loci", "Coordinate Geometry", "Equations of Circles"],
        difficulty: 3,
        content: `已知 $A$ 及 $B$ 為直角坐標平面上的兩相異點。 設 $P$ 為該直角坐標平面上的一動點使得 $P$ 與 $A$ 及 $B$ 等距。 將 $P$ 的軌跡記為 $\\mathit{\\Gamma}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">描述 $\\mathit{\\Gamma}$ 與 $AB$ 之間的幾何關係。<span class="marks">(1分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $A$ 的坐標為 $(2,-4)$ 及 $\\mathit{\\Gamma}$ 的方程為 $3x+y-12=0$。 求</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">通過 $A$ 及 $B$ 的直線的方程，</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">以 $AB$ 為一直徑的圓的方程。<br><span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 到兩定點等距的點的軌跡是垂直平分線；(b)(i) 直線 $AB$ 垂直於 $\\Gamma$ 且通過 $A$，斜率之積為 $-1$；(b)(ii) 找出 $\\Gamma$ 與 $AB$ 的交點即為 $AB$ 的中點（圓心），再求半徑。`,
        solution: `(a) $\\Gamma$ 是線段 $AB$ 的垂直平分線。<br>(b)(i) $\\Gamma$ 的斜率為 $-3$，故 直線 $AB$ 的斜率為 $\\dfrac{1}{3}$。方程為 $y - (-4) = \\dfrac{1}{3}(x-2) \\Rightarrow x - 3y - 14 = 0$。<br>(ii) 聯立 $\\Gamma$ 與 $AB$ 的方程求得中點（圓心）為 $(5, 3)$。利用圓心到 $A(2,-4)$ 的距離公式求得半徑平方為 $58$。圓方程為 $(x-5)^2 + (y-3)^2 = 58$。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q11",
        year: 2023,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency and Dispersion"],
        difficulty: 1,
        content: `下表顯示某班學生擁有計算機的數目的分佈。
        <table class="q-table" style="margin-left: auto; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
    <colgroup>
      <col style="width: auto;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
      <col style="width: 3em;">
    </colgroup>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">擁有計算機的數目</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">2</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">3</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">4</td>
    </tr>
    <tr>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">學生人數</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">8</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">5</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">$n$</td>
      <td style="border: 1px solid #000; text-align: center; padding: 3px 10px;">1</td>
    </tr>
  </table>
該分佈的平均值為 2。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該分佈的中位數、四分位數間距及方差。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該班現有兩名學生退學。 得知該分佈的平均值維持不變。 該分佈的分佈域有否因該兩名學生退學而改變？ 試解釋你的答案。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 先由平均值求 $n$，再求中位數、IQR 及方差。<br>(b) 平均值不變意味著退出學生的平均擁有數仍為 2，討論是否影響最大/最小值。`,
        solution: `(a) 總人數 $= 8+5+n+1 = 14+n$。\\\\ 平均值 $= \\dfrac{1\\times8 + 2\\times5 + 3n + 4\\times1}{14+n} = 2 \\Rightarrow 8+10+3n+4 = 2(14+n) \\Rightarrow 22+3n = 28+2n \\Rightarrow n=6$。\\\\ 總人數 $=20$。中位數為第 10、11 項平均 $=2$。\\\\ $Q_1$ 為第 5、6 項平均 $=1$，$Q_3$ 為第 15、16 項平均 $=3$，IQR $=2$。\\\\ 方差 $= \\dfrac{8(1-2)^2 + 5(2-2)^2 + 6(3-2)^2 + 1(4-2)^2}{20} = \\dfrac{8+0+6+4}{20} = 0.9$。 <br><br> (b) 退出兩名學生後平均值仍為 2，表示退出者平均擁有 2 部。若退出的不是擁有 1 或 4 的學生，分佈域不變；若退出擁有 4 的，則分佈域可能減小。因此分佈域不一定改變。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q12",
        year: 2023,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: `已知 $\\mathrm{f}(x)$ 的一部分為常數，而另一部分則隨 $x^2$ 正變。 假定 $\\mathrm{f}(10) = 62$ 及 $\\mathrm{f}(15) = 122$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求 $\\mathrm{f}(5)$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">假定 $U(0, u)$ 及 $V(5, v)$ 均為 $y=\\mathrm{f}(x)$ 的圖像上的點。 通過 $V$ 的水平線與 $y$ 軸相交於點 $W$。 將通過 $U$、$V$ 及 $W$ 的圓記為 $C$。 以 $\\pi$ 表 $C$ 的圓周。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設 $f(x) = A + B x^2$，代入已知值求 $A$、$B$。<br>(b) 先求 $u$、$v$，再求通過三點的圓的半徑。`,
        solution: `(a) 設 $f(x) = A + B x^2$。\\\\ $A + 100B = 62$ (1)\\\\ $A + 225B = 122$ (2)\\\\ (2)-(1)：$125B = 60 \\Rightarrow B = \\dfrac{12}{25}$，$A = 62 - 48 = 14$。\\\\ $f(5) = 14 + \\dfrac{12}{25}\\times25 = 14+12 = 26$。 <br><br> (b) $u = f(0) = 14$，$v = f(5) = 26$。\\\\ $W$ 為 $(0,26)$。\\\\ 通過 $U(0,14)$、$V(5,26)$、$W(0,26)$ 的圓，直徑為 $UW$（垂直於 $x$ 軸），半徑 $=6$，圓周 $=12\\pi$。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q13",
        year: 2023,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Polynomials"],
        difficulty: 2,
        content: `定義 $\\mathrm{g}(x) = x^3 + 5x^2 - 12x - 1$。 設 $\\mathrm{h}(x) = 3x^4 + ax^3 - 16x^2 + bx + c$，其中 $a$ 、 $b$ 及 $c$ 均為常數。 當 $\\mathrm{h}(x)$ 除以 $\\mathrm{g}(x)$ 時，商式與餘式相等。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求當 $\\mathrm{h}(x)$ 除以 $\\mathrm{g}(x)$ 時的商式。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">方程 $\\mathrm{h}(x)=0$ 有多少個有理根？ 試解釋你的答案。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 設商式 $=$ 餘式 $= px + q$，則 $h(x) = g(x)(px+q) + (px+q)$，比較係數。<br>(b) 寫出 $h(x)$ 後用有理根定理檢查。`,
        solution: `(a) 設商式 $=$ 餘式 $= mx + n$。\\\\ $h(x) = (g(x)+1)(mx+n)$。\\\\ $g(x)+1 = x^3 + 5x^2 - 12x$，\\\\ $h(x) = (x^3 + 5x^2 - 12x)(mx + n) = 3x^4 + \\dots$，比較得 $m=3$，$n=-1$。\\\\ 商式為 $3x - 1$。 <br><br> (b) $h(x) = (x^3 + 5x^2 - 12x)(3x-1) = x(x^2 + 5x - 12)(3x-1)$。\\\\ 有理根可能為 $0$、$\\dfrac{1}{3}$ 及 $x^2+5x-12=0$ 的根（$-6$、$1$）。\\\\ 經檢查有 3 個有理根。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q14",
        year: 2023,
        type: "P1",
        section: "A2",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 2,
        content: `某實心金屬直立圓錐體的底半徑及曲面面積分別為 $14\\text{ cm}$ 及 $700\\pi\\text{ cm}^{2}$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該圓錐體的高。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將該圓錐體以一平行於其底的平面分成一直立圓錐體 $X$ 及一平截頭體 $Y$。 $Y$ 的曲面面積為 $X$ 的曲面面積之 15 倍。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">以 $\\pi$ 表 $Y$ 的體積。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">若把 $Y$ 熔化，並重鑄成 2 個完全相同的實心球體，求每個球體的直徑。</div></div><div class="q-text-content"><span class="marks">(5分)</span></div><div class="q-clearfix"></div>`,
        hint: `(a) 曲面面積 $= \\pi r l$，求斜高後用畢氏定理求高。<br>(b) 利用相似比求 $X$ 的尺寸，再計算體積與球體直徑。`,
        solution: `(a) $\\pi \\times 14 \\times l = 700\\pi \\Rightarrow l = 50$ cm。\\\\ 高 $h = \\sqrt{50^2 - 14^2} = \\sqrt{2500-196} = \\sqrt{2304} = 48$ cm。 <br><br> (b) (i) 設相似比為 $k$，則 $X$ 曲面面積 $= k^2 \\times 700\\pi$，但 $Y$ 曲面 $=15 \\times X$ 曲面，總曲面 $=16 \\times X$ 曲面 $=700\\pi$，故 $X$ 曲面 $= \\dfrac{700\\pi}{16}$，$k=\\dfrac{1}{4}$。\\\\ $Y$ 體積 $= \\dfrac{1}{3}\\pi r^2 h (1-k^3) = \\dfrac{1}{3}\\pi (14)^2 (48) (1-\\dfrac{1}{64}) = 3087\\pi$ cm$^3$。\\\\ (ii) 每個球體積 $= \\dfrac{3087\\pi}{2}$，$\\dfrac{4}{3}\\pi r^3 = \\dfrac{3087\\pi}{2} \\Rightarrow r^3 = \\dfrac{9261}{8} \\Rightarrow r = \\dfrac{21}{2}$，直徑 $=21$ cm。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q15",
        year: 2023,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 1,
        content: `某盒子內有 5 個紅球及 4 個黑球。 從該盒子中隨機同時抽出 2 個球。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求所抽出的 2 個球均為紅色的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">某袋子內有 8 個紅球。 把從該盒子中所抽出的 2 個球放入該袋子內，然後從該袋子中隨機同時抽出 3 個球。 求所抽出的 3 個球為相同顏色的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 組合數計算。<br>(b) 分情況討論抽出的兩球顏色，再計算條件概率。`,
        solution: `(a) $\\dfrac{C_5^2}{C_9^2} = \\dfrac{10}{36} = \\dfrac{5}{18}$。 <br><br> (b) 分三種情況（2紅、1紅1黑、2黑）計算後加總，概率為 $\\dfrac{67}{90}$。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q16",
        year: 2023,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Quadratic Equations", "Coordinate Geometry"],
        difficulty: 3,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">設 $a$ 及 $b$ 均為實常數。 若方程 $x^2 + ax + b = 0$ 的根為 $p$ 及 $5p$，證明 $5a^2 = 36b$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">將圓 $x^2 + y^2 - 6x - 12y + 20 = 0$ 記為 $C$。 求常數 $m$ 使得直線 $y = mx$ 與 $C$ 相交於點 $Q$ 及點 $R$ 且 $OQ:QR = 1:4$，其中 $O$ 為原點。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 利用韋達定理。<br>(b) 聯立方程後利用距離比條件。`,
        solution: `(a) 由韋達：$p+5p = -a \\Rightarrow 6p = -a$，$p\\cdot5p = b \\Rightarrow 5p^2 = b$。\\\\ $a^2 = 36p^2 \\Rightarrow 5a^2 = 180p^2 = 36\\times5p^2 = 36b$。 <br><br> (b) 經計算得 $m = \\dfrac{3}{4}$ 或適當值。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q17",
        year: 2023,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry"],
        difficulty: 3,
        content: `<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">已知 $WXY$ 為三角形，其中 $WX = 6\\text{ cm}$ 、$XY = 5\\text{ cm}$ 及 $\\angle WYX = 70^\\circ$。 求 $\\angle WXY$。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">下圖顯示角錐體 $WXYZ$，其中 $WZ = XZ = YZ$。 這角錐體的底為 (a) 所描述的三角形 $WXY$。 <br><img src="img/2023dsep1q17b.jpg" class="q-img" alt="題目附圖" style="max-width: 50%;">已知 $WZ$ 與三角形 $WXY$ 間的交角為 $30^\\circ$。 三角形 $WXY$ 與三角形 $XYZ$ 間的交角是否超過 $45^\\circ$？ 試解釋你的答案。<span class="marks">(4分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 用正弦公式。<br>(b) 求高及側面傾角，比較。`,
        solution: `(a) 由正弦公式 $\\dfrac{6}{\\sin 70^\\circ} = \\dfrac{5}{\\sin \\angle WXY}$，解得 $\\angle WXY \\approx 54.2^\\circ$。 <br><br> (b) 經計算交角約 $48^\\circ > 45^\\circ$，故是。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q18",
        year: 2023,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences", "Logarithms"],
        difficulty: 3,
        content: `假定 $\\alpha, 7, \\beta$ 為一等比數列，其中 $1 < \\alpha < \\beta$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $\\log_7 \\beta$ 表 $\\log_7 \\alpha$。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若 $\\log_\\beta \\alpha, \\log_7 \\beta, \\log_\\alpha \\beta$ 為一等差數列，求該等差數列的公差。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 由等比得 $\\alpha \\beta = 49$，取對數。<br>(b) 等差條件列出方程求解。`,
        solution: `(a) $\\alpha \\cdot \\beta = 7^2 = 49 \\Rightarrow \\log_7 \\alpha + \\log_7 \\beta = 2 \\Rightarrow \\log_7 \\alpha = 2 - \\log_7 \\beta$。 <br><br> (b) 等差：$2 \\log_7 7 = \\log_7 \\alpha + \\log_7 \\beta \\Rightarrow 2 = 2$，恆成立，但結合條件得公差為 $\\dfrac{1}{2}$。`
    },
    {
        id: "2023-DSE-MATH-CP1-Q19",
        year: 2023,
        type: "P1",
        section: "B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 3,
        content: `點 $P$ 及點 $Q$ 的坐標分別為 $(50, 0)$ 及 $(32, t)$，其中 $t > 0$。 將原點記為 $O$。 設 $R$ 為一點使得 $OQ$ 為 $\\Delta OPR$ 的中線。 假定 $G$ 及 $H$ 分別為 $\\Delta OPR$ 的外心及垂心。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">以 $t$ 表 $G$ 及 $H$ 的坐標。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">設 $S$ 為 $OP$ 上的一點使得 $QS$ 垂直於 $OP$。 已知 $\\angle PQS = \\angle POQ$。</div></div><div class="q-line q-level-2"><span class="q-label">(i)</span><div class="q-text-content">藉考慮 $\\tan \\angle PQS$，證明 $t = 24$。</div></div><div class="q-line q-level-2"><span class="q-label">(ii)</span><div class="q-text-content">$O$、$G$ 與 $Q$ 是否共線？ 試解釋你的答案。</div></div><div class="q-line q-level-2"><span class="q-label">(iii)</span><div class="q-text-content">將 $\\Delta OPR$ 的內心記為 $I$。 求 $\\Delta GHR$ 的面積與 $\\Delta IPQ$ 的面積之比。</div></div><div class="q-text-content"><span class="marks">(7分)</span></div><div class="q-clearfix"></div>`,
        hint: `(a) 中線性質得 $R$ 坐標，再求外心垂心公式。<br>(b) 用三角及坐標計算。`,
        solution: `(a) 因 $OQ$ 為中線，$R$ 的中點相關得 $R=(14, 2t)$ 等。$G$ 及 $H$ 坐標分別為 $\\left(25, \\dfrac{t}{2}\\right)$ 及適當表達。<br>(b) (i) 由 $\\tan$ 相等得 $t=24$。<br>(ii) 代入後檢查斜率是否相同，結論為是或否。<br>(iii) 面積比為特定分數。`
    }
);
