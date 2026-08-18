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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{5}{h+k}=\\dfrac{k}{h-3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$5(h-3)=k(h+k)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$5h-15=hk+k^2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$5h-hk=15+k^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$h=\\dfrac{15+k^2}{5-k}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解：</span><br>$\\dfrac{5}{h+k}=\\dfrac{k}{h-3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\dfrac{h+k}{5}=\\dfrac{h-3}{k}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$k(h+k)=5(h-3)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$hk+k^2=5h-15$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$hk-5h=-15-k^2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$h=\\dfrac{15+k^2}{5-k}$</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">    $\\dfrac{x^{-8}y}{(x^7y^9)^{-6}}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{x^{-8}y}{x^{-42}y^{-54}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=x^{-8-(-42)}y^{1-(-54)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=x^{34}y^{55}$</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">250 包常規芝士的最小可能重量</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=(0.22-0.005)(250)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=53.75\\text{ kg}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$&gt;53.65\\text{ kg}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 1：</span><br>留意 $\\dfrac{53600+50}{250}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=214.6\\text{ g}$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$&lt;215\\text{ g}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 2：</span><br>留意 $\\dfrac{53600+50}{220-5}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\approx 249.5348837$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$&lt;250$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，該宣稱不正確。</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$3x+2&gt;\\dfrac{4x-5}{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$6x+4&gt;4x-5$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$6x-4x&gt;-5-4$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$2x&gt;-9$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&gt;\\dfrac{-9}{2}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">$3x-2&lt;7$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x&lt;3$</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\dfrac{-9}{2}&lt;x&lt;3$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">4</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">設 $x$ 及 $y$ 分別為渡輪上男乘客的數目及女乘客的原來數目。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\begin{cases}y=(1+40\\%)x\\\\x=(1+40\\%)(y-24)\\end{cases}$</div><div class="ms-mark">1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，可得 $x=1.4(1.4x-24)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得 $x=35$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">因此，渡輪上男乘客的數目為 35。</div><div class="ms-mark"></div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 1：</span><br>設 $x$ 為渡輪上男乘客的數目。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">故此，女乘客的原來數目為 $(1+40\\%)x$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=(1+40\\%)((1+40\\%)x-24)$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$x=1.4(1.4x-24)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">求解後，可得 $x=35$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l1"><span style="background-color: #42b4ff;">另解 2：</span><br>渡輪上男乘客的數目</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\dfrac{(1+40\\%)(24)}{(1+40\\%)^2-1}$</div><div class="ms-mark">1M+1A+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=35$</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$a:b=6:7$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{4a-3c}{2b-c}=9$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$4a-3c=18b-9c$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{24}{7}b-3c=18b-9c$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$c=\\dfrac{17}{7}b$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$b:c=7:17$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$a:b:c=6:7:17$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $a=6k$、$b=7k$ 及 $c=17k$，其中 $k$ 為非零常數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{5a+8b}{7b+3c}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5(6k)+8(7k)}{7(7k)+3(17k)}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{86}{100}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{43}{50}$</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-content ms-from-l1">$\\angle RPS$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\angle PTQ-\\angle PSQ$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=68^\\circ-41^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=27^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\angle RQS$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\angle RPS$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=27^\\circ$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l1">留意 $\\angle PQR=90^\\circ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l1">$\\angle PQS$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=\\angle PQR-\\angle RQS$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=90^\\circ-27^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l1">$=63^\\circ$</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row" style="white-space: pre; overflow-x: visible; overflow-y: visible;"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2" style="white-space: pre; overflow-x: visible; overflow-y: visible; grid-column: 2 / 6;">$\\angle CAE=\\angle DBE$\t[內錯角，$AC // DB$]<br>$\\angle AEC=\\angle BED$\t[對頂角]<br>$\\angle ACE=\\angle BDE$\t[三角形內角和]<br>$\\Delta ACE\\sim\\Delta BDE$\t(AAA)</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2" style="border:1px solid #555555; padding:2px 4px; border-right: none; white-space: pre; overflow-x: auto;">評分標準：<br>情況 1\t附有正確理由的任何正確證明。<br>情況 2\t未附有正確理由的任何正確證明。</div><div class="ms-mark" style="border:1px solid #555555; padding:2px 4px; border-left: none;"><br>2<br>1</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\dfrac{BE}{BD}=\\dfrac{AE}{AC}$ （藉 (a)）</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{20-AE}{15}=\\dfrac{AE}{10}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AE=8\\text{ cm}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $AC&gt;AE&gt;CE$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AC^2=10^2=100$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$AE^2+CE^2=8^2+7^2=113$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $AE^2+CE^2\\ne AC^2$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，$\\Delta ACE$ 不是直角三角形。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)，$\\Delta BDE$ 不是直角三角形。</div><div class="ms-mark">1A</div></div></div>`
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">$a$　5　5　6　6　8　8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">3</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3　3　3　4　5　5　9　9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">4</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0　1　4　4　5　6　7　7　9</td>
    </tr>    
  </table>
該分佈的分佈域為 $27$。<div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該分佈的平均值及眾數。<span class="marks">(3分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">若從該群中隨機選出一名工人，求所選出的工人在該星期的工作時數超過該分佈的眾數的概率。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 分佈域為 最大值 $-$ 最小值，即 $(50+b) - (20+a) = 27$，結合幹葉圖排序可確定 $a$ 和 $b$ 唯一的整數解，進而求出平均值和眾數；(b) 數出時數大於眾數的人數，除以總人數。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$49-(20+a)=27$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$a=2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">平均值 $=36$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">眾數 $=33$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{14}{24}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{7}{12}$</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\mathit{\\Gamma}$ 為 $AB$ 的垂直平分線。</div><div class="ms-mark">1M</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">$\\mathit{\\Gamma}$ 的斜率 $=-3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AB$ 的斜率 $=\\dfrac{1}{3}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$AB$ 的方程為 $y+4=\\dfrac{1}{3}(x-2)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$x-3y-14=0$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">留意所求圓的圓心為 $AB$ 與 $\\mathit{\\Gamma}$ 的交點。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解 $3x+y-12=0$ 及 $x-3y-14=0$，所求圓的圓心坐標為 $(5,-3)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">所求圓的半徑</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{(2-5)^2+(-4+3)^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\sqrt{10}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，所求圓的方程為 $(x-5)^2+(y+3)^2=10$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-content ms-from-l3"><span style="background-color: #42b4ff;">另解：</span><br>設 $(h,k)$ 為 $B$ 的坐標。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$h-3k-14=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$h=3k+14$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">留意 $AB$ 的中點在 $\\mathit{\\Gamma}$ 上。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{2+3k+14}{2}+\\dfrac{-4+k}{2}-12=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得 $k=-2$ 及 $h=8$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$B$ 的坐標為 $(8,-2)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所求圓的圓心坐標</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\left(\\dfrac{2+8}{2},\\dfrac{-4-2}{2}\\right)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=(5,-3)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所求圓的半徑 $=\\sqrt{(2-5)^2+(-4+3)^2}=\\sqrt{10}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，所求圓的方程為 $(x-5)^2+(y+3)^2=10$。</div><div class="ms-mark">1A</div></div></div>`
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
        content: `下表顯示某班學生擁有計算機的數目的分佈。<table class="q-table" style="margin-left: auto; margin-top: 12px; margin-bottom: 12px; margin-right: auto; min-width: 300px; border-collapse: collapse; table-layout: auto;">
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
  </table>該分佈的平均值為 2。<br><div class="q-line"><span class="q-label">(a)</span><div class="q-text-content">求該分佈的中位數、四分位數間距及方差。<span class="marks">(5分)</span><div class="q-clearfix"></div></div></div><div class="q-line"><span class="q-label">(b)</span><div class="q-text-content">該班現有兩名學生退學。 得知該分佈的平均值維持不變。 該分佈的分佈域有否因該兩名學生退學而改變？ 試解釋你的答案。<span class="marks">(2分)</span><div class="q-clearfix"></div></div></div>`,
        hint: `(a) 先由平均值求 $n$，再求中位數、IQR 及方差。<br>(b) 平均值不變意味著退出學生的平均擁有數仍為 2，討論是否影響最大/最小值。`,
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{1(8)+2(5)+3(n)+4(1)}{8+5+n+1}=2$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$n=6$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">中位數 $=2$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">四分位數間距 $=3-1=2$</div><div class="ms-mark">1M+1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">方差 $=0.9$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">留意原來的分佈域為 3。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">有兩種情況。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">情況 1：兩名學生各擁有 2 部計算機。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該分佈的分佈域 $=3$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">情況 2：一名學生擁有 1 部計算機，另一名學生擁有 3 部計算機。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該分佈的分佈域 $=3$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，因兩名學生退出，該分佈的分佈域沒有改變。</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $\\mathrm{f}(x)=px^2+q$，其中 $p$ 及 $q$ 均為非零常數。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $100p+q=62$ 及 $225p+q=122$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $p=\\dfrac{12}{25}$ 及 $q=14$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\mathrm{f}(x)=\\dfrac{12}{25}x^2+14$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\mathrm{f}(5)=26$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">藉 (a)，可得 $u=14$ 及 $v=26$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $UW=12$ 及 $VW=5$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $\\angle UWV=90^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$UV$ 為 $C$ 的直徑。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">    $C$ 的周界</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi\\sqrt{UW^2+VW^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\pi\\sqrt{12^2+5^2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=13\\pi$</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $mx+n$ 為所求的商，其中 $m$ 及 $n$ 為常數。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\mathrm{h}(x)=(mx+n)(x^3+5x^2-12x-1)+mx+n$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">比較 $x^4$ 的係數，可得 $m=3$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">比較 $x^2$ 的係數，可得 $5n-12m=-16$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $n=4$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，所求的商為 $3x+4$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\mathrm{h}(x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(3x+4)(x^3+5x^2-12x-1)+3x+4=0$ （藉 (a)）</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$(3x+4)(x^3+5x^2-12x)=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x(3x+4)(x^2+5x-12)=0$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=0$、$3x+4=0$ 或 $x^2+5x-12=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x=0$、$x=-\\dfrac{4}{3}$ 或 $x=\\dfrac{-5\\pm\\sqrt{73}}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $\\dfrac{-5+\\sqrt{73}}{2}$ 及 $\\dfrac{-5-\\sqrt{73}}{2}$ 均不是有理數。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">再留意 $-\\dfrac{4}{3}$ 及 $0$ 均為 $\\mathrm{h}(x)=0$ 的有理根。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，方程 $\\mathrm{h}(x)=0$ 有 2 個有理根。</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">設 $l\\text{ cm}$ 為該圓錐的斜高。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\pi(14)l=700\\pi$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$l=50$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該圓錐的高</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{l^2-14^2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{50^2-14^2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=48\\text{ cm}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">    $Y$ 的體積</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{3}\\pi(14^2)(48)\\left(1-\\left(\\dfrac{1}{\\sqrt{15}+1}\\right)^3\\right)$</div><div class="ms-mark">1M+1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=3087\\pi\\text{ cm}^3$</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">設 $d\\text{ cm}$ 為每個球體的直徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{4}{3}\\pi\\left(\\dfrac{d}{2}\\right)^3=\\dfrac{3087\\pi}{2}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$d=21$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，每個球體的直徑為 $21\\text{ cm}$。</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{C_2^5}{C_2^9}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{18}$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">    所求的概率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{5}{18}+\\dfrac{C_1^3 C_1^4 C_1^2+C_2^4 C_1^3}{C_2^9 C_3^{10}}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{67}{90}$</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">留意我們有 $p+5p=-a$ 及 $p(5p)=b$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $6p=-a$ 及 $5p^2=b$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $5\\left(-\\dfrac{a}{6}\\right)^2=b$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $5a^2=36b$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $t$ 為 $Q$ 的 $x$ 坐標。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">則 $R$ 的 $x$ 坐標為 $5t$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">把 $y=mx$ 代入 $x^2+y^2-6x-12y+20=0$，可得</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$x^2+(mx)^2-6x-12(mx)+20=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $(m^2+1)x^2-(12m+6)x+20=0$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$t$ 及 $5t$ 為方程 $x^2-\\dfrac{6(2m+1)}{m^2+1}x+\\dfrac{20}{m^2+1}=0$ 的根。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">藉 (a)，可得 $5\\left(-\\dfrac{6(2m+1)}{m^2+1}\\right)^2=36\\left(\\dfrac{20}{m^2+1}\\right)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">簡化後，可得 $(2m+1)^2=4(m^2+1)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $4m=3$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">求解後，可得 $m=\\dfrac{3}{4}$。</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">藉正弦公式，可得</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{\\sin\\angle XWY}{XY}=\\dfrac{\\sin\\angle WYX}{WX}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{\\sin\\angle XWY}{5}=\\dfrac{\\sin 70^\\circ}{6}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle XWY\\approx 51.54318937^\\circ$ 或 $\\angle XWY\\approx 128.4568106^\\circ$（捨去）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\angle XWY\\approx 51.5^\\circ$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">設 $P$ 為 $Z$ 在三角形 $WXY$ 上的投影。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $PW=PX=PY$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">設 $M$ 為 $XY$ 的中點。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">三角形 $WXY$ 與三角形 $XYZ$ 的夾角為 $\\angle PMZ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">通過 $W$、$X$ 及 $Y$ 的圓的圓心為 $P$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\angle MPX=\\dfrac{1}{2}\\angle XPY=\\angle XWY$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$MP=PX\\cos\\angle MPX=PW\\cos\\angle XWY$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\tan\\angle PWZ=\\dfrac{PZ}{PW}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\tan 30^\\circ=\\dfrac{PZ}{PW}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$PZ=PW\\tan 30^\\circ$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\tan\\angle PMZ=\\dfrac{PZ}{MP}=\\dfrac{PW\\tan 30^\\circ}{PW\\cos\\angle XWY}=\\dfrac{\\tan 30^\\circ}{\\cos\\angle XWY}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx\\dfrac{\\tan 30^\\circ}{\\cos 51.54318937^\\circ}$ （藉 (a)）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\approx 0.928328501$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，可得 $\\tan\\angle PMZ&lt;1$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">故此，可得 $\\angle PMZ&lt;45^\\circ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，三角形 $WXY$ 與三角形 $XYZ$ 的夾角不超過 $45^\\circ$。</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">$\\dfrac{\\beta}{7}=\\dfrac{7}{\\alpha}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\alpha\\beta=49$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log_7\\alpha\\beta=\\log_7 49$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log_7\\alpha+\\log_7\\beta=2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log_7\\alpha=2-\\log_7\\beta$</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-content ms-from-l2">$\\log_\\alpha\\beta-\\log_7\\beta=\\log_7\\beta-\\log_\\beta\\alpha$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{\\log_7\\beta}{\\log_7\\alpha}-\\log_7\\beta=\\log_7\\beta-\\dfrac{\\log_7\\alpha}{\\log_7\\beta}$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">設 $u=\\log_7\\beta$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\dfrac{u}{2-u}-u=u-\\dfrac{2-u}{u}$ （藉 (a)）</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$u^2=2$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$u=\\sqrt{2}$ 或 $u=-\\sqrt{2}$（捨去）</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$\\log_7\\beta=\\sqrt{2}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">該等差數列的公差</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\log_7\\beta-\\log_7\\alpha$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\sqrt{2}-(2-\\sqrt{2})$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=1$</div><div class="ms-mark">1A</div></div></div>`
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
        solution: `<div class="ms-container"><div class="ms-row"><div class="ms-num1">(a)</div><div class="ms-content ms-from-l2">    $PQ$ 的斜率</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">$=\\dfrac{t-0}{32-50}=\\dfrac{-t}{18}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">留意 $G$ 的 $x$ 坐標為 25。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">$PR$ 的垂直平分線的方程為 $y-t=\\dfrac{18}{t}(x-32)$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">把 $x=25$ 代入，可得 $y=\\dfrac{t^2-126}{t}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$G$ 的坐標為 $\\left(25,\\dfrac{t^2-126}{t}\\right)$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-content ms-from-l2">再留意 $R$ 的 $x$ 坐標為 14。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l2">通過 $O$ 且垂直於 $PR$ 的直線方程為 $y=\\dfrac{18}{t}x$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">把 $x=14$ 代入，可得 $y=\\dfrac{252}{t}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l2">因此，$H$ 的坐標為 $\\left(14,\\dfrac{252}{t}\\right)$。</div><div class="ms-mark">1A</div></div><p><div class="ms-row"><div class="ms-num1">(b)</div><div class="ms-num2">(i)</div><div class="ms-content ms-from-l3">由於 $\\angle PQS=\\angle POQ$，可得 $\\tan\\angle PQS=\\tan\\angle POQ$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$\\dfrac{50-32}{t}=\\dfrac{t}{32}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$t^2-576=0$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $t&gt;0$，可得 $t=24$。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(ii)</div><div class="ms-content ms-from-l3">藉 (a)，$G$ 的坐標為 $\\left(25,\\dfrac{75}{4}\\right)$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$Q$ 的坐標為 $(32,24)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$OG$ 的斜率 $=\\dfrac{\\dfrac{75}{4}-0}{25-0}=\\dfrac{3}{4}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$OQ$ 的斜率 $=\\dfrac{24-0}{32-0}=\\dfrac{3}{4}$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$OG$ 的斜率與 $OQ$ 的斜率相等。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，$O$、$G$ 及 $Q$ 共線。</div><div class="ms-mark">1A</div></div><div class="ms-row"><div class="ms-num2">(iii)</div><div class="ms-content ms-from-l3">留意 $OQ$ 垂直於 $PR$ 及 $\\Delta OPR\\cong\\Delta ORQ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$OQ$ 為 $\\angle POR$ 的角平分線。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，$I$ 在 $OQ$ 上。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $J$ 為由 $I$ 至 $OP$ 的垂足。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">則可得 $\\Delta OIJ\\sim\\Delta OPQ$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">設 $r$ 為 $\\Delta OPR$ 內切圓的半徑。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">故此，可得 $\\dfrac{OQ-r}{r}=\\dfrac{OP}{PQ}$。</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $OQ=40$ 及 $PQ=30$，可得 $\\dfrac{40-r}{r}=\\dfrac{50}{30}$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">求解後，可得 $r=15$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">因此，$I$ 的坐標為 $(20,15)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">再留意 $H$ 的坐標為 $\\left(14,\\dfrac{21}{2}\\right)$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">再留意 $O$、$H$、$I$、$G$ 及 $Q$ 共線。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">由於 $OQ$ 為 $\\Delta OPR$ 的中線，可得 $PQ=QR$。</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">所求的比</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=\\dfrac{1}{2}(GH)(QR):\\dfrac{1}{2}(IQ)(PQ)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=GH:IQ$</div><div class="ms-mark">1M</div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=(25-14):(32-20)$</div><div class="ms-mark"></div></div><div class="ms-row"><div class="ms-content ms-from-l3">$=11:12$</div><div class="ms-mark">1A</div></div></div>`
    }
);
