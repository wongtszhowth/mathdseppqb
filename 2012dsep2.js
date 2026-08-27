// 2012dsep2.js
// 直接用 .push 追加題目，不會覆蓋之前的數據
questions.push(
    {
        id: "2012-DSE-MATH-CP2-Q01",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Laws of Indices"],
        difficulty: 1,
        content: {
            tc: `$\\dfrac{(2x^4)^3}{2x^5} =$
<div class="q-mcopt">
A.\t$3x^2$。<br>
B.\t$3x^7$。<br>
C.\t$4x^7$。<br>
D.\t$4x^{59}$。
</div>`,
            en: `$\\dfrac{(2x^4)^3}{2x^5} =$
<div class="q-mcopt">
A.\t$3x^2$.<br>
B.\t$3x^7$.<br>
C.\t$4x^7$.<br>
D.\t$4x^{59}$.
</div>`
        },
        hint: {
            tc: `先處理指數再簡化。`,
            en: `Process the exponent first, then simplify.`
        },
        solution: `C (94%)<p><iframe src="https://www.youtube.com/embed/9ay9UMBFSsk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q02",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Factorization"],
        difficulty: 1,
        content: {
            tc: `$(4x+y)^2 - (4x-y)^2 =$
<div class="q-mcopt">
A.\t$0$。 <br>
B.\t$2y^2$。 <br>
C.\t$8xy$。 <br>
D.\t$16xy$。 
</div>`,
            en: `$(4x+y)^2 - (4x-y)^2 =$
<div class="q-mcopt">
A.\t$0$.<br>
B.\t$2y^2$.<br>
C.\t$8xy$.<br>
D.\t$16xy$.
</div>`
        },
        hint: {
            tc: `應用平方差公式。 `,
            en: `Apply the difference of two squares identity.`
        },
        solution: `D (75%)<p><iframe src="https://www.youtube.com/embed/PRaKud6h-Gg?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q03",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Identities"],
        difficulty: 2,
        content: {
            tc: `若 $p$ 及 $q$ 均為常數使得 $x^2 + p \\equiv (x+2)(x+q)+10$，則 $p =$
<div class="q-mcopt">
A.\t$-4$。 <br>
B.\t$-2$。 <br>
C.\t$6$。 <br>
D.\t$10$。 
</div>`,
            en: `If $p$ and $q$ are constants such that $x^2 + p \\equiv (x+2)(x+q)+10$, then $p =$
<div class="q-mcopt">
A.\t$-4$.<br>
B.\t$-2$.<br>
C.\t$6$.<br>
D.\t$10$.
</div>`
        },
        hint: {
            tc: `展開兩邊並比較係數。 `,
            en: `Expand both sides and compare coefficients.`
        },
        solution: `C (59%)<p><iframe src="https://www.youtube.com/embed/1LBt9d3RysQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q04",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Remainder Theorem and Factor Theorem"],
        difficulty: 1,
        content: {
            tc: `若 $k$ 為一常數使得 $x^3 + 4x^2 + kx - 12$ 被 $x+3$ 整除，則 $k=$
<div class="q-mcopt">
A.\t$-25$。 <br>
B.\t$-1$。 <br>
C.\t$1$。 <br>
D.\t$17$。 
</div>`,
            en: `If $k$ is a constant such that $x^3 + 4x^2 + kx - 12$ is divisible by $x+3$, then $k=$
<div class="q-mcopt">
A.\t$-25$.<br>
B.\t$-1$.<br>
C.\t$1$.<br>
D.\t$17$.
</div>`
        },
        hint: {
            tc: `用因式定理求 $k$。 `,
            en: `Use the Factor Theorem to find $k$.`
        },
        solution: `B (76%)<p><iframe src="https://www.youtube.com/embed/iWFHC7SjmQw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q05",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Equations in Two Unknowns"],
        difficulty: 1,
        content: {
            tc: `若 $m+2n+6=2m-n=7$，則 $n=$
<div class="q-mcopt">
A.\t$-4$。 <br>
B.\t$-1$。 <br>
C.\t$3$。 <br>
D.\t$11$。 
</div>`,
            en: `If $m+2n+6=2m-n=7$, then $n=$
<div class="q-mcopt">
A.\t$-4$.<br>
B.\t$-1$.<br>
C.\t$3$.<br>
D.\t$11$.
</div>`
        },
        hint: {
            tc: `由兩個方程聯立求解。 `,
            en: `Solve the system of linear equations.`
        },
        solution: `B (79%)<p><iframe src="https://www.youtube.com/embed/veU1XAN80M0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q06",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `圖中所示為 $y=a(x+b)^2$ 的圖像，其中 $a$ 及 $b$ 均為常數。 下列何者正確？
<div class="q-mcopt"><img src="img/2012dsep2q06.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$a>0$  及  $b>0$<br>
B.\t$a>0$  及  $b<0$<br>
C.\t$a<0$  及  $b>0$<br>
D.\t$a<0$  及  $b<0$
</div><div style="clear: both;"></div>`,
            en: `The figure shows the graph of $y = a(x+b)^2$, where $a$ and $b$ are constants. Which of the following is true?
<div class="q-mcopt"><img src="img/2012dsep2q06.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$a>0$ and $b>0$<br>
B.\t$a>0$ and $b<0$<br>
C.\t$a<0$ and $b>0$<br>
D.\t$a<0$ and $b<0$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `觀察開口方向及頂點位置。 `,
            en: `Observe the direction of opening and vertex position.`
        },
        solution: `D (53%)<p><iframe src="https://www.youtube.com/embed/9dtNEZ5AxPs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q07",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Linear Inequalities and Compound Inequalities"],
        difficulty: 2,
        content: {
            tc: `$15+4x<3$  或  $9-2x>1$  的解為
<div class="q-mcopt">
A.\t$x<-3$。 <br>
B.\t$x>-3$。 <br>
C.\t$x<4$。 <br>
D.\t$x>4$。 
</div>`,
            en: `The solution of $15+4x<3$ or $9-2x>1$ is
<div class="q-mcopt">
A.\t$x<-3$.<br>
B.\t$x>-3$.<br>
C.\t$x<4$.<br>
D.\t$x>4$.
</div>`
        },
        hint: {
            tc: `分別解兩個不等式再取聯集。 `,
            en: `Solve both inequalities separately and find their union.`
        },
        solution: `C (59%)<p><iframe src="https://www.youtube.com/embed/bYXg6A4iQ_w?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q08",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Percentages"],
        difficulty: 1,
        content: {
            tc: `在某公司，$37.5\\%$ 的僱員為女性。 若 $60\\%$ 的男僱員及 $80\\%$ 的女僱員均已婚，則該公司中已婚僱員所佔的百分數為
<div class="q-mcopt">
A.\t$32.5\\%$。 <br>
B.\t$45\\%$。 <br>
C.\t$55\\%$。 <br>
D.\t$67.5\\%$。 
</div>`,
            en: `In a company, $37.5\\%$ of the employees are female. If $60\\%$ of the male employees and $80\\%$ of the female employees are married, then the percentage of married employees in the company is
<div class="q-mcopt">
A.\t$32.5\\%$.<br>
B.\t$45\\%$.<br>
C.\t$55\\%$.<br>
D.\t$67.5\\%$.
</div>`
        },
        hint: {
            tc: `設總人數後計算已婚比例。 `,
            en: `Assume a total number of employees to calculate the married percentage.`
        },
        solution: `D (84%)<p><iframe src="https://www.youtube.com/embed/hODqE245EB4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q09",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: {
            tc: `若 $x$ 及 $y$ 均為非零的數使得 $\\dfrac{6x+5y}{3y-2x} = 7$，則 $x:y=$
<div class="q-mcopt">
A.\t$4:5$。 <br>
B.\t$4:13$。 <br>
C.\t$5:4$。 <br>
D.\t$13:4$。 
</div>`,
            en: `If $x$ and $y$ are non-zero numbers such that $\\dfrac{6x+5y}{3y-2x} = 7$, then $x:y=$
<div class="q-mcopt">
A.\t$4:5$.<br>
B.\t$4:13$.<br>
C.\t$5:4$.<br>
D.\t$13:4$.
</div>`
        },
        hint: {
            tc: `交叉相乘後整理比例。 `,
            en: `Cross-multiply and rearrange to find the ratio.`
        },
        solution: `A (75%)<p><iframe src="https://www.youtube.com/embed/LcypZF80l14?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q10",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Variations"],
        difficulty: 2,
        content: {
            tc: `已知 $y$ 的一部分隨 $x^2$ 正變，而另一部分隨 $x$ 反變。 當 $x=1$ 時，$y=-4$； 又當 $x=2$ 時，$y=5$。 當 $x=-2$ 時，$y=$
<div class="q-mcopt">
A.\t$-11$。 <br>
B.\t$-5$。 <br>
C.\t$5$。 <br>
D.\t$11$。 
</div>`,
            en: `It is given that $y$ partly varies directly as $x^2$ and partly varies inversely as $x$. When $x=1$, $y=-4$ and when $x=2$, $y=5$. When $x=-2$, $y=$
<div class="q-mcopt">
A.\t$-11$.<br>
B.\t$-5$.<br>
C.\t$5$.<br>
D.\t$11$.
</div>`
        },
        hint: {
            tc: `設 $y = kx^2 + \\dfrac{m}{x}$ 後求常數。 `,
            en: `Set $y = kx^2 + \\dfrac{m}{x}$ and solve for constants.`
        },
        solution: `D (63%)<p><iframe src="https://www.youtube.com/embed/j16ZU0-9-ik?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q11",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Rates, Ratios and Proportions"],
        difficulty: 1,
        content: {
            tc: `<u>小麗</u>執行一項 $7$ 小時的打字工作。 她在首 $3$ 小時及最後 $4$ 小時的平均打字速率分別為每分鐘 $63$ 字及每分鐘 $56$ 字。 求她在該 $7$ 小時的平均打字速率。 
<div class="q-mcopt">
A.\t每分鐘 $17$ 字<br>
B.\t每分鐘 $35$ 字<br>
C.\t每分鐘 $59$ 字<br>
D.\t每分鐘 $60$ 字
</div>`,
            en: `Mary performs a typing task for $7$ hours. Her average typing speeds for the first $3$ hours and the last $4$ hours are $63$ words per minute and $56$ words per minute respectively. Find her average typing speed for the $7$ hours.
<div class="q-mcopt">
A.\t$17$ words per minute<br>
B.\t$35$ words per minute<br>
C.\t$59$ words per minute<br>
D.\t$60$ words per minute
</div>`
        },
        hint: {
            tc: `用加權平均計算。 `,
            en: `Calculate using weighted average.`
        },
        solution: `C (79%)<p><iframe src="https://www.youtube.com/embed/3VMAu--8i_o?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q12",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 1,
        content: {
            tc: `圖中，第 $1$ 個圖案包含 $1$ 粒點子。 對任意正整數 $n$，第 $(n+1)$ 個圖案是由第 $n$ 個圖案加上 $n$ 粒點子所組成。 求第 $8$ 個圖案的點子數目。<img src="img/2012dsep2q12.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-mcopt">
A.\t$22$<br>
B.\t$29$<br>
C.\t$36$<br>
D.\t$37$
</div>`,
            en: `In the figure, the 1st pattern consists of $1$ dot. For any positive integer $n$, the $(n+1)$th pattern is formed by adding $n$ dots to the $n$th pattern. Find the number of dots in the 8th pattern.<img src="img/2012dsep2q12.jpg" class="q-img" alt="題目附圖" style="max-width: 70%;"><div class="q-mcopt">
A.\t$22$<br>
B.\t$29$<br>
C.\t$36$<br>
D.\t$37$
</div>`
        },
        hint: {
            tc: `累加計算或求通項。 `,
            en: `Calculate by cumulative summation or general term.`
        },
        solution: `B (74%)<p><iframe src="https://www.youtube.com/embed/jUAw4oLQ4U4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q13",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 1,
        content: {
            tc: `$0.0322515 =$
<div class="q-mcopt">
A.\t$0.032$（準確至三位有效數字）。 <br>
B.\t$0.0322$（準確至四位小數）。 <br>
C.\t$0.03225$（準確至五位有效數字）。 <br>
D.\t$0.032252$（準確至六位小數）。 
</div>`,
            en: `$0.0322515 =$
<div class="q-mcopt">
A.\t$0.032$ (correct to $3$ significant figures).<br>
B.\t$0.0322$ (correct to $4$ decimal places).<br>
C.\t$0.03225$ (correct to $5$ significant figures).<br>
D.\t$0.032252$ (correct to $6$ decimal places).
</div>`
        },
        hint: {
            tc: `判斷有效數字及小數位。 `,
            en: `Determine significant figures and decimal places.`
        },
        solution: `D (79%)<p><iframe src="https://www.youtube.com/embed/nySfHgQ10cM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q14",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Approximation and Errors"],
        difficulty: 2,
        content: {
            tc: `一條幼繩的長度量得 $25\\text{ m}$ 準確至最接近的 m。 若將該繩分割為 $n$ 條使每條均量得 $5\\text{ cm}$ 準確至最接近的 cm，求 $n$ 的最大可取值。 
<div class="q-mcopt">
A.\t$445$<br>
B.\t$566$<br>
C.\t$567$<br>
D.\t$650$
</div>`,
            en: `The length of a piece of thin string is measured as $25\\text{ m}$ correct to the nearest m. If the string is cut into $n$ pieces such that the length of each piece is measured as $5\\text{ cm}$ correct to the nearest cm, find the greatest possible value of $n$.
<div class="q-mcopt">
A.\t$445$<br>
B.\t$566$<br>
C.\t$567$<br>
D.\t$650$
</div>`
        },
        hint: {
            tc: `考慮量度誤差範圍。 `,
            en: `Consider measurement bounds and limits.`
        },
        solution: `B (50%)<p><iframe src="https://www.youtube.com/embed/kuMP57Fu6a8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q15",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)", "Mensuration"],
        difficulty: 1,
        content: {
            tc: `圖中，四邊形 $ABCD$ 的面積為
<div class="q-mcopt"><img src="img/2012dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$144\\text{ cm}^2$。 <br>
B.\t$160\\text{ cm}^2$。 <br>
C.\t$178\\text{ cm}^2$。 <br>
D.\t$288\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, the area of quadrilateral $ABCD$ is
<div class="q-mcopt"><img src="img/2012dsep2q15.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$144\\text{ cm}^2$.<br>
B.\t$160\\text{ cm}^2$.<br>
C.\t$178\\text{ cm}^2$.<br>
D.\t$288\\text{ cm}^2$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `分割成三角形或梯形計算。 `,
            en: `Divide into triangles or trapeziums to calculate.`
        },
        solution: `A (90%)<p><iframe src="https://www.youtube.com/embed/UCWpJZPa6fw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q16",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Mensuration"],
        difficulty: 1,
        content: {
            tc: `圖中，扇形 $OAB$ 及扇形 $OCD$ 的圓心均為 $O$。 若 $\\overparen{AB} = 12\\pi\\text{ cm}$ 、 $\\overparen{CD} = 16\\pi\\text{ cm}$  及  $OA = 30\\text{ cm}$，則 $AC =$
<div class="q-mcopt"><img src="img/2012dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$5\\text{ cm}$。 <br>
B.\t$10\\text{ cm}$。 <br>
C.\t$20\\text{ cm}$。 <br>
D.\t$40\\text{ cm}$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $OAB$ and $OCD$ are sectors with centre $O$. If $\\overparen{AB} = 12\\pi\\text{ cm}$, $\\overparen{CD} = 16\\pi\\text{ cm}$ and $OA = 30\\text{ cm}$, then $AC =$
<div class="q-mcopt"><img src="img/2012dsep2q16.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$5\\text{ cm}$.<br>
B.\t$10\\text{ cm}$.<br>
C.\t$20\\text{ cm}$.<br>
D.\t$40\\text{ cm}$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由弧長求圓心角及半徑。 `,
            en: `Find the central angle and radii using arc lengths.`
        },
        solution: `B (82%)<p><iframe src="https://www.youtube.com/embed/_51aMOBQ4n4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q17",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)", "Mensuration"],
        difficulty: 2,
        content: {
            tc: `圖中，$ABCD$ 為一平行四邊形。 $E$ 及 $F$ 分別為 $AB$ 及 $CD$ 上的點。 $AD$ 的延線與 $EF$ 的延線相交於 $G$。 已知 $DF:FC = 3:4$ 及 $AD:DG = 1:1$。 若 $\\Delta DFG$ 的面積為 $3\\text{ cm}^2$，則平行四邊形 $ABCD$ 的面積為
<div class="q-mcopt"><img src="img/2012dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$12\\text{ cm}^2$。 <br>
B.\t$14\\text{ cm}^2$。 <br>
C.\t$18\\text{ cm}^2$。 <br>
D.\t$21\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $ABCD$ is a parallelogram. $E$ and $F$ are points lying on $AB$ and $CD$ respectively. $AD$ produced and $EF$ produced meet at $G$. It is given that $DF:FC = 3:4$ and $AD:DG = 1:1$. If the area of $\\Delta DFG$ is $3\\text{ cm}^2$, then the area of the parallelogram $ABCD$ is
<div class="q-mcopt"><img src="img/2012dsep2q17.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$12\\text{ cm}^2$.<br>
B.\t$14\\text{ cm}^2$.<br>
C.\t$18\\text{ cm}^2$.<br>
D.\t$21\\text{ cm}^2$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用面積比與底的比例。 `,
            en: `Use area ratios and base proportions.`
        },
        solution: `B (43%)<p><iframe src="https://www.youtube.com/embed/2_5QZi6uSiI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q18",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (2D)"],
        difficulty: 1,
        content: {
            tc: `圖中，$D$ 為 $AC$ 上的一點使得 $BD$ 垂直於 $AC$。 若 $BC = \\ell$，則 $AB =$
<div class="q-mcopt"><img src="img/2012dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{\\ell \\sin \\alpha}{\\cos \\beta}$。 <br>
B.\t$\\dfrac{\\ell \\sin \\beta}{\\cos \\alpha}$。 <br>
C.\t$\\dfrac{\\ell \\cos \\alpha}{\\sin \\beta}$。 <br>
D.\t$\\dfrac{\\ell \\cos \\beta}{\\sin \\alpha}$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $D$ is a point lying on $AC$ such that $BD$ is perpendicular to $AC$. If $BC = \\ell$, then $AB =$
<div class="q-mcopt"><img src="img/2012dsep2q18.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 60%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{\\ell \\sin \\alpha}{\\cos \\beta}$.<br>
B.\t$\\dfrac{\\ell \\sin \\beta}{\\cos \\alpha}$.<br>
C.\t$\\dfrac{\\ell \\cos \\alpha}{\\sin \\beta}$.<br>
D.\t$\\dfrac{\\ell \\cos \\beta}{\\sin \\alpha}$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `在直角三角形中表達比值。 `,
            en: `Express ratios in right-angled triangles.`
        },
        solution: `A (71%)<p><iframe src="https://www.youtube.com/embed/PWPXKKB9yNE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q19",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: {
            tc: `$\\dfrac{\\cos 60^\\circ}{1 - \\cos(90^\\circ - \\theta)} + \\dfrac{\\cos 240^\\circ}{1 - \\cos(270^\\circ - \\theta)} =$
<div class="q-mcopt">
A.\t$\\dfrac{1}{\\cos^2 \\theta}$<br>
B.\t$\\dfrac{\\cos \\theta}{\\tan \\theta}$<br>
C.\t$\\dfrac{\\tan \\theta}{\\cos \\theta}$<br>
D.\t$\\dfrac{1}{\\cos \\theta \\tan \\theta}$
</div>`,
            en: `$\\dfrac{\\cos 60^\\circ}{1 - \\cos(90^\\circ - \\theta)} + \\dfrac{\\cos 240^\\circ}{1 - \\cos(270^\\circ - \\theta)} =$
<div class="q-mcopt">
A.\t$\\dfrac{1}{\\cos^2 \\theta}$<br>
B.\t$\\dfrac{\\cos \\theta}{\\tan \\theta}$<br>
C.\t$\\dfrac{\\tan \\theta}{\\cos \\theta}$<br>
D.\t$\\dfrac{1}{\\cos \\theta \\tan \\theta}$
</div>`
        },
        hint: {
            tc: `先化簡特殊角及誘導公式。 `,
            en: `Simplify special angles and reduction formulas first.`
        },
        solution: `C (51%)<p><iframe src="https://www.youtube.com/embed/M6cKQh6COQk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q20",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 1,
        content: {
            tc: `圖中，$O$ 為圓 $ABCD$ 的圓心。 若 $\\angle BAO = 28^\\circ$ 、 $\\angle BCD = 114^\\circ$  及  $\\angle CDO = 42^\\circ$，則 $\\angle ABC =$
<div class="q-mcopt"><img src="img/2012dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$90^\\circ$。 <br>
B.\t$96^\\circ$。 <br>
C.\t$100^\\circ$。 <br>
D.\t$138^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $O$ is the centre of the circle $ABCD$. If $\\angle BAO = 28^\\circ$, $\\angle BCD = 114^\\circ$ and $\\angle CDO = 42^\\circ$, then $\\angle ABC =$
<div class="q-mcopt"><img src="img/2012dsep2q20.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$90^\\circ$.<br>
B.\t$96^\\circ$.<br>
C.\t$100^\\circ$.<br>
D.\t$138^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用圓心角及圓周角性質。 `,
            en: `Use properties of angles at centre and angles in a circle.`
        },
        solution: `C (71%)<p><iframe src="https://www.youtube.com/embed/o3AN84klAsk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q21",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)", "Mensuration"],
        difficulty: 2,
        content: {
            tc: `圖中，$AB$ 為圓 $ABCD$ 的一直徑。 若 $AB = 12\\text{ cm}$ 及 $CD = 6\\text{ cm}$，則陰影區域的面積為
<div class="q-mcopt"><img src="img/2012dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$(12\\pi - 9)\\text{ cm}^2$。 <br>
B.\t$(12\\pi + 9)\\text{ cm}^2$。 <br>
C.\t$(12\\pi - 9\\sqrt{3})\\text{ cm}^2$。 <br>
D.\t$(12\\pi + 9\\sqrt{3})\\text{ cm}^2$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $AB$ is a diameter of the circle $ABCD$. If $AB = 12\\text{ cm}$ and $CD = 6\\text{ cm}$, then the area of the shaded region is
<div class="q-mcopt"><img src="img/2012dsep2q21.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$(12\\pi - 9)\\text{ cm}^2$.<br>
B.\t$(12\\pi + 9)\\text{ cm}^2$.<br>
C.\t$(12\\pi - 9\\sqrt{3})\\text{ cm}^2$.<br>
D.\t$(12\\pi + 9\\sqrt{3})\\text{ cm}^2$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用扇形及三角形面積計算。 `,
            en: `Calculate using areas of sectors and triangles.`
        },
        solution: `D (46%)<p><iframe src="https://www.youtube.com/embed/f4nXxDkL1Yk?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q22",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Geometry (Polygons)"],
        difficulty: 2,
        content: {
            tc: `下列有關正 $12$ 邊形的敍述，何者正確？
<div class="q-mcms">
I.\t每一外角均為 $30^\\circ$。
II.\t每一內角均為 $150^\\circ$。
III.\t反射對稱軸的數目為 $6$。 
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Which of the following statements about a regular 12-sided polygon are true?
<div class="q-mcms">
I.\tEach exterior angle is $30^\\circ$.
II.\tEach interior angle is $150^\\circ$.
III.\tThe number of axes of reflectional symmetry is $6$.
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `計算內外角及對稱軸。 `,
            en: `Calculate interior/exterior angles and axes of symmetry.`
        },
        solution: `A (44%)<p><iframe src="https://www.youtube.com/embed/DYWNKwQEvE8?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q23",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Coordinate Geometry"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">點 $P$ 的直角坐標為 $(-3, -3\\sqrt{3})$。 若 $P$ 繞原點逆時針方向旋轉 $90^\\circ$，則它的像的極坐標為</div><div class="q-mcopt" style="color: red;">
A.\t$(3, 150^\\circ)$。 <br>
B.\t$(3, 330^\\circ)$。 <br>
C.\t$(6, 150^\\circ)$。 <br>
D.\t$(6, 330^\\circ)$。 
</div>`,
            en: `<div style="color: red;">The rectangular coordinates of the point $P$ are $(-3, -3\\sqrt{3})$. If $P$ is rotated anticlockwise about the origin through $90^\\circ$, then the polar coordinates of its image are</div><div class="q-mcopt" style="color: red;">
A.\t$(3, 150^\\circ)$.<br>
B.\t$(3, 330^\\circ)$.<br>
C.\t$(6, 150^\\circ)$.<br>
D.\t$(6, 330^\\circ)$.
</div>`
        },
        hint: {
            tc: `先旋轉再轉極坐標。 `,
            en: `Rotate first and convert to polar coordinates.`
        },
        solution: `D (42%)<p><iframe src="https://www.youtube.com/embed/bHrF2yB0vvU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q24",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Loci"],
        difficulty: 1,
        content: {
            tc: `若 $P$ 為直角坐標平面上的一動點使得 $P$ 與點 $(20, 12)$ 間之距離等於 $5$，則 $P$ 的軌跡為一
<div class="q-mcopt">
A.\t圓。 <br>
B.\t正方形。 <br>
C.\t拋物線。 <br>
D.\t三角形。 
</div>`,
            en: `If $P$ is a moving point in the rectangular coordinate plane such that the distance between $P$ and the point $(20, 12)$ is equal to $5$, then the locus of $P$ is a
<div class="q-mcopt">
A.\tcircle.<br>
B.\tsquare.<br>
C.\tparabola.<br>
D.\ttriangle.
</div>`
        },
        hint: {
            tc: `定點距離固定的軌跡是圓。 `,
            en: `The locus of points equidistant from a fixed point is a circle.`
        },
        solution: `A (72%)<p><iframe src="https://www.youtube.com/embed/ZNmdqzUEnAA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q25",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `圖中，直線 $L_1$ 及直線 $L_2$ 的方程分別為 $ax+y=b$ 及 $cx+y=d$。 下列何者正確？
<div class="q-mcms"><img src="img/2012dsep2q25.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\lt 0$
II.\t$a \\lt c$
III.\t$b \\gt d$
IV.\t$ad \\gt bc$
</div>
<div class="q-mcopt">
A.\t只有 I、II 及 III<br>
B.\t只有 I、II 及 IV<br>
C.\t只有 I、III 及 IV<br>
D.\t只有 II、III 及 IV
</div><div style="clear: both;"></div>`,
            en: `In the figure, the equations of the straight lines $L_1$ and $L_2$ are $ax+y=b$ and $cx+y=d$ respectively. Which of the following are true?
<div class="q-mcms"><img src="img/2012dsep2q25.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$a \\lt 0$
II.\t$a \\lt c$
III.\t$b \\gt d$
IV.\t$ad \\gt bc$
</div>
<div class="q-mcopt">
A.\tI, II and III only<br>
B.\tI, II and IV only<br>
C.\tI, III and IV only<br>
D.\tII, III and IV only
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由圖像判斷斜率及截距。 `,
            en: `Determine slopes and intercepts from the graph.`
        },
        solution: `C (40%)<p><iframe src="https://www.youtube.com/embed/N4Cj38SRVtA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q26",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles"],
        difficulty: 2,
        content: {
            tc: `圖中，圓的半徑及圓心的坐標分別為 $r$ 及 $(h, k)$。 下列何者正確？
<div class="q-mcms"><img src="img/2012dsep2q26.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$h+k \\gt 0$
II.\t$r-h \\gt 0$
III.\t$r-k \\gt 0$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
            en: `In the figure, the radius of the circle and the coordinates of the centre are $r$ and $(h, k)$ respectively. Which of the following are true?
<div class="q-mcms"><img src="img/2012dsep2q26.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$h+k \\gt 0$
II.\t$r-h \\gt 0$
III.\t$r-k \\gt 0$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由圖像判斷圓心位置及半徑。 `,
            en: `Determine the centre location and radius from the graph.`
        },
        solution: `A (56%)<p><iframe src="https://www.youtube.com/embed/pvqBReXtHTA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q27",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `9★◆ 為三位數，其中 ★ 及 ◆ 均為 $0$ 至 $9$（包括 $0$ 及 $9$）內的整數。 求該三位數可被 $5$ 整除的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{7}{33}$<br>
C.\t$\\dfrac{20}{99}$<br>
D.\t$\\dfrac{19}{100}$
</div>`,
            en: `9★◆ is a 3-digit number, where ★ and ◆ are integers from $0$ to $9$ inclusive. Find the probability that the 3-digit number is divisible by $5$.
<div class="q-mcopt">
A.\t$\\dfrac{1}{5}$<br>
B.\t$\\dfrac{7}{33}$<br>
C.\t$\\dfrac{20}{99}$<br>
D.\t$\\dfrac{19}{100}$
</div>`
        },
        hint: {
            tc: `可被 5 整除時末位為 0 或 5。 `,
            en: `A number is divisible by 5 if its last digit is 0 or 5.`
        },
        solution: `A (50%)<p><iframe src="https://www.youtube.com/embed/Pif8TKs6KRA?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q28",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Probability", "Statistical Graphs"],
        difficulty: 2,
        content: {
            tc: `下面的幹葉圖顯示一群文娛中心的會員的年歲的分佈。
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
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0	5	6	6	8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1	4	5	5	7	8	8	9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3	4	4	6	7	9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;"></td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">9</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1</td>
    </tr>
  </table>
從該群中隨機選出一名會員。 求所選出的會員的年歲不小於 $74$ 的概率。 
<div class="q-mcopt">
A.\t$0.2$<br>
B.\t$0.3$<br>
C.\t$0.7$<br>
D.\t$0.8$
</div>`,
            en: `The stem-and-leaf diagram below shows the distribution of the ages of a group of members in a recreational centre.
        <table class="q-table" style="border-collapse: collapse; table-layout: auto; width: auto; white-space: pre;" align="center">
    <colgroup>
      <col style="width: auto;">
      <col style="width: auto;">
    </colgroup>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;"><u>Stem (tens)</u></td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;"><u>Leaf (units)</u></td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">5</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">0	5	6	6	8</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">6</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1	4	5	5	7	8	8	9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">7</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">3	4	4	6	7	9</td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">8</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;"></td>
    </tr>
    <tr>
      <td style="border-right: 1px solid black; text-align: right; padding: 0px 10px;">9</td>
      <td style="border-left: 1px solid black; text-align: left; padding: 0px 10px;">1</td>
    </tr>
  </table>
A member is randomly selected from the group. Find the probability that the selected member is not under the age of $74$.
<div class="q-mcopt">
A.\t$0.2$<br>
B.\t$0.3$<br>
C.\t$0.7$<br>
D.\t$0.8$
</div>`
        },
        hint: {
            tc: `由幹葉圖讀取人數後計算。 `,
            en: `Read counts from stem-and-leaf diagram then calculate.`
        },
        solution: `B (59%)<p><iframe src="https://www.youtube.com/embed/0jt1vuCx2Wc?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q29",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Dispersion", "Statistical Graphs"],
        difficulty: 1,
        content: {
            tc: `下面的棒形圖顯示一群女生擁有指環的數目的分佈。 求該分佈的標準差準確至二位小數。 
<div class="q-mcopt"><img src="img/2012dsep2q29zh.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$1.04$<br>
B.\t$1.16$<br>
C.\t$1.19$<br>
D.\t$2.09$
</div><div style="clear: both;"></div>`,
            en: `The bar chart below shows the distribution of the numbers of rings owned by the girls in a group. Find the standard deviation of the distribution correct to 2 decimal places.
<div class="q-mcopt"><img src="img/2012dsep2q29en.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$1.04$<br>
B.\t$1.16$<br>
C.\t$1.19$<br>
D.\t$2.09$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由棒形圖求平均值後計算標準差。 `,
            en: `Find the mean from the bar chart and calculate standard deviation.`
        },
        solution: `B (71%)<p><iframe src="https://www.youtube.com/embed/E-ex7UAVHC4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q30",
        year: 2012,
        type: "P2",
        section: "MC_A",
        level: ["Junior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency"],
        difficulty: 2,
        content: {
            tc: `考慮以下數據：<div style="text-align: center;">$19$   $10$   $12$   $12$   $13$   $13$   $14$   $15$   $16$   $m$   $n$</div>若以上數據的平均值及中位數均為 $14$，則下列何者正確？
<div class="q-mcms">
I.\t$m \\ge 14$
II.\t$n \\le 16$
III.\t$m + n = 30$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Consider the following data:<div style="text-align: center;">$19$   $10$   $12$   $12$   $13$   $13$   $14$   $15$   $16$   $m$   $n$</div>If both the mean and the median of the above data are $14$, which of the following are true?
<div class="q-mcms">
I.\t$m \\ge 14$
II.\t$n \\le 16$
III.\t$m + n = 30$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `由平均值及中位數求 $m$、$n$ 的條件。 `,
            en: `Derive conditions for $m$ and $n$ using mean and median.`
        },
        solution: `D (47%)<p><iframe src="https://www.youtube.com/embed/TkZ8OjoWxKY?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q31",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["H.C.F. and L.C.M."],
        difficulty: 2,
        content: {
            tc: `三個數式的 H.C.F. 及 L.C.M. 分別為 $ab^2$ 及 $4a^4b^5c^6$。 若第一個數式及第二個數式分別為 $2a^2b^4c$ 及 $4a^4b^2c^6$，則第三個數式為
<div class="q-mcopt">
A.\t$ab^2$。 <br>
B.\t$ab^5$。 <br>
C.\t$2ab^2c$。 <br>
D.\t$2ab^5c$。 
</div>`,
            en: `The H.C.F. and the L.C.M. of three expressions are $ab^2$ and $4a^4b^5c^6$ respectively. If the first expression and the second expression are $2a^2b^4c$ and $4a^4b^2c^6$ respectively, then the third expression is
<div class="q-mcopt">
A.\t$ab^2$.<br>
B.\t$ab^5$.<br>
C.\t$2ab^2c$.<br>
D.\t$2ab^5c$.
</div>`
        },
        hint: {
            tc: `由 H.C.F. 及 L.C.M. 求第三個數式。 `,
            en: `Determine the third expression from H.C.F. and L.C.M.`
        },
        solution: `B (55%)<p><iframe src="https://www.youtube.com/embed/IH4mgw-8oa0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q32",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Exponential Functions and Logarithm Functions"],
        difficulty: 2,
        content: {
            tc: `圖中的圖像顯示 $x$ 與 $\\log_3 y$ 之間的線性關係。 若 $y=mn^x$，則 $n=$
<div class="q-mcopt"><img src="img/2012dsep2q32.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{1}{81}$。 <br>
B.\t$\\dfrac{1}{9}$。 <br>
C.\t$9$。 <br>
D.\t$81$。 
</div><div style="clear: both;"></div>`,
            en: `The graph in the figure shows the linear relation between $x$ and $\\log_3 y$. If $y=mn^x$, then $n=$
<div class="q-mcopt"><img src="img/2012dsep2q32.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 40%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$\\dfrac{1}{81}$.<br>
B.\t$\\dfrac{1}{9}$.<br>
C.\t$9$.<br>
D.\t$81$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由斜率求 $n$。 `,
            en: `Find $n$ using the slope of the line.`
        },
        solution: `C (43%)<p><iframe src="https://www.youtube.com/embed/7-WcTUHsKWQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q33",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Base Conversion"],
        difficulty: 2,
        content: {
            tc: `<div style="color: red;">$\\text{AD0000002012}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$(10)16^{11} + (13)16^{10} + 8210$。 <br>
B.\t$(10)16^{12} + (13)16^{11} + 131360$。 <br>
C.\t$(11)16^{11} + (14)16^{10} + 8210$。 <br>
D.\t$(11)16^{12} + (14)16^{11} + 131360$。 
</div>`,
            en: `<div style="color: red;">$\\text{AD0000002012}_{16} =$</div><div class="q-mcopt" style="color: red;">
A.\t$(10)16^{11} + (13)16^{10} + 8210$.<br>
B.\t$(10)16^{12} + (13)16^{11} + 131360$.<br>
C.\t$(11)16^{11} + (14)16^{10} + 8210$.<br>
D.\t$(11)16^{12} + (14)16^{11} + 131360$.
</div>`
        },
        hint: {
            tc: `直接轉成十進制表示。 `,
            en: `Convert directly to decimal representation.`
        },
        solution: `A (64%)<p><iframe src="https://www.youtube.com/embed/7poPZ4aJ0z4?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q34",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs", "Quadratic Equations in One Unknown"],
        difficulty: 2,
        content: {
            tc: `設 $\\mathrm{f}(x)$ 為二次函數。 若 $y=\\mathrm{f}(x)$ 的圖像的頂點的坐標為 $(3,-4)$，則下列何者必為正確？
<div class="q-mcopt">
A.\t方程 $\\mathrm{f}(x)=0$ 的根均為整數。 <br>
B.\t方程 $\\mathrm{f}(x)-3=0$ 的根均為有理數。 <br>
C.\t方程 $\\mathrm{f}(x)+4=0$ 的根均為實數。 <br>
D.\t方程 $\\mathrm{f}(x)+5=0$ 的根均為非實數。 
</div>`,
            en: `Let $\\mathrm{f}(x)$ be a quadratic function. If the coordinates of the vertex of the graph of $y = \\mathrm{f}(x)$ are $(3,-4)$, which of the following must be true?
<div class="q-mcopt">
A.\tThe roots of the equation $\\mathrm{f}(x)=0$ are integers.<br>
B.\tThe roots of the equation $\\mathrm{f}(x)-3=0$ are rational numbers.<br>
C.\tThe roots of the equation $\\mathrm{f}(x)+4=0$ are real numbers.<br>
D.\tThe roots of the equation $\\mathrm{f}(x)+5=0$ are non-real numbers.
</div>`
        },
        hint: {
            tc: `頂點在 $x$ 軸下方時方程有實根。 `,
            en: `Check real roots based on the vertex location relative to the x-axis.`
        },
        solution: `C (49%)<p><iframe src="https://www.youtube.com/embed/4-nI7aOdKdo?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q35",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Complex Numbers"],
        difficulty: 2,
        content: {
            tc: `$i^3(\\beta i - 3) =$
<div class="q-mcopt">
A.\t$\\beta + 3i$<br>
B.\t$\\beta - 3i$<br>
C.\t$-\\beta + 3i$<br>
D.\t$-\\beta - 3i$
</div>`,
            en: `$i^3(\\beta i - 3) =$
<div class="q-mcopt">
A.\t$\\beta + 3i$<br>
B.\t$\\beta - 3i$<br>
C.\t$-\\beta + 3i$<br>
D.\t$-\\beta - 3i$
</div>`
        },
        hint: {
            tc: `用 $i^3 = -i$ 簡化。 `,
            en: `Simplify using $i^3 = -i$.`
        },
        solution: `A (55%)<p><iframe src="https://www.youtube.com/embed/NOEmERKgXfs?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q36",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Linear Programming"],
        difficulty: 2,
        content: {
            tc: `圖中所示為一陰影區域（包括邊界在內）。 若 $(h, k)$ 為陰影區域中的一點，則下列何者正確？
<div class="q-mcms"><img src="img/2012dsep2q36.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$k \\ge 3$
II.\t$h - k \\ge -3$
III.\t$2h + k \\le 6$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div><div style="clear: both;"></div>`,
            en: `The figure shows a shaded region (including the boundary). If $(h, k)$ is a point lying in the shaded region, which of the following are true?
<div class="q-mcms"><img src="img/2012dsep2q36.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
I.\t$k \\ge 3$
II.\t$h - k \\ge -3$
III.\t$2h + k \\le 6$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由邊界直線判斷不等式。 `,
            en: `Determine inequalities from boundary lines.`
        },
        solution: `D (38%)<p><iframe src="https://www.youtube.com/embed/ZSS6TL4x89Q?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q37",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Sequences"],
        difficulty: 2,
        content: {
            tc: `設 $a_n$ 為一等差數列的第 $n$ 項。 若 $a_{18} = 26$ 及 $a_{23} = 61$，則下列何者正確？
<div class="q-mcms">
I.\t$a_{14} \\lt 0$
II.\t$a_1 - a_2 \\lt 0$
III.\t$a_1 + a_2 + a_3 + \\cdots + a_{27} \\gt 0$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Let $a_n$ be the $n$th term of an arithmetic sequence. If $a_{18} = 26$ and $a_{23} = 61$, which of the following are true?
<div class="q-mcms">
I.\t$a_{14} \\lt 0$
II.\t$a_1 - a_2 \\lt 0$
III.\t$a_1 + a_2 + a_3 + \\cdots + a_{27} \\gt 0$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `先求公差後判斷各選項。 `,
            en: `Find common difference first, then evaluate statements.`
        },
        solution: `A (43%)<p><iframe src="https://www.youtube.com/embed/h_9cIUOspyE?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q38",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Functions and Graphs"],
        difficulty: 2,
        content: {
            tc: `下列何者可表示在同一直角坐標系上 $y=\\mathrm{f}(x)$ 的圖像及 $y=\\mathrm{f}(x-2)+1$ 的圖像？
<div class="q-mcopt">
<img src="img/2012dsep2q38A.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">\t\t<img src="img/2012dsep2q38B.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;"><br>
<img src="img/2012dsep2q38C.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 40%;">\t\t<img src="img/2012dsep2q38D.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">
</div>`,
            en: `Which of the following may represent the graph of $y = \\mathrm{f}(x)$ and the graph of $y = \\mathrm{f}(x-2)+1$ on the same rectangular coordinate system?
<div class="q-mcopt">
<img src="img/2012dsep2q38A.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">\t\t<img src="img/2012dsep2q38B.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;"><br>
<img src="img/2012dsep2q38C.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 40%;">\t\t<img src="img/2012dsep2q38D.jpg" class="q-img" alt="題目附圖" style="display: inline-block; vertical-align: top; max-width: 35%;">
</div>`
        },
        hint: {
            tc: `水平右移 2 單位，垂直上移 1 單位。 `,
            en: `Shift right by 2 units horizontally and up by 1 unit vertically.`
        },
        solution: `C (63%)<p><iframe src="https://www.youtube.com/embed/DKxCuFP3Ef0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q39",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Algebra"],
        topic: ["Trigonometric Ratios"],
        difficulty: 2,
        content: {
            tc: `圖中所示為
<div class="q-mcopt"><img src="img/2012dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$y=1+3\\cos\\dfrac{x^\\circ}{2}$ 的圖像。 <br>
B.\t$y=1+3\\cos 2x^\\circ$ 的圖像。 <br>
C.\t$y=4+3\\cos\\dfrac{x^\\circ}{2}$ 的圖像。 <br>
D.\t$y=4+3\\cos 2x^\\circ$ 的圖像。 
</div><div style="clear: both;"></div>`,
            en: `The figure shows
<div class="q-mcopt"><img src="img/2012dsep2q39.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\tthe graph of $y=1+3\\cos\\dfrac{x^\\circ}{2}$.<br>
B.\tthe graph of $y=1+3\\cos 2x^\\circ$.<br>
C.\tthe graph of $y=4+3\\cos\\dfrac{x^\\circ}{2}$.<br>
D.\tthe graph of $y=4+3\\cos 2x^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `由振幅及週期判斷。 `,
            en: `Determine using amplitude and period.`
        },
        solution: `D (53%)<p><iframe src="https://www.youtube.com/embed/J0m6BurFE9Q?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q40",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Trigonometry (3D)"],
        difficulty: 2,
        content: {
            tc: `圖中所示為一正四面體 $ABCD$。 求平面 $ABC$ 與平面 $BCD$ 間之交角準確至最接近的度。 
<div class="q-mcopt"><img src="img/2012dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$48^\\circ$<br>
B.\t$53^\\circ$<br>
C.\t$60^\\circ$<br>
D.\t$71^\\circ$
</div><div style="clear: both;"></div>`,
            en: `The figure shows a regular tetrahedron $ABCD$. Find the angle between the plane $ABC$ and the plane $BCD$ correct to the nearest degree.
<div class="q-mcopt"><img src="img/2012dsep2q40.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 45%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$48^\\circ$<br>
B.\t$53^\\circ$<br>
C.\t$60^\\circ$<br>
D.\t$71^\\circ$
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `用正四面體二面角公式。 `,
            en: `Use dihedral angle formula for regular tetrahedrons.`
        },
        solution: `D (30%)<p><iframe src="https://www.youtube.com/embed/gFy5-D1riZI?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q41",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Geometry (Circles)"],
        difficulty: 2,
        content: {
            tc: `圖中，$PQ$ 為圓 $ABC$ 在 $O$ 的切線，其中 $O$ 為半圓 $PBQ$ 的圓心。 已知 $BCP$ 為一直線。 若 $\\angle BPQ = 12^\\circ$，則 $\\angle BAC =$
<div class="q-mcopt"><img src="img/2012dsep2q41.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$18^\\circ$。 <br>
B.\t$24^\\circ$。 <br>
C.\t$36^\\circ$。 <br>
D.\t$54^\\circ$。 
</div><div style="clear: both;"></div>`,
            en: `In the figure, $PQ$ is the tangent to the circle $ABC$ at $O$, where $O$ is the centre of the semicircle $PBQ$. It is given that $BCP$ is a straight line. If $\\angle BPQ = 12^\\circ$, then $\\angle BAC =$
<div class="q-mcopt"><img src="img/2012dsep2q41.jpg" class="q-img" alt="題目附圖" style="float: right; max-width: 50%; margin-left: 15px; margin-bottom: 5px; overflow: hidden;">
A.\t$18^\\circ$.<br>
B.\t$24^\\circ$.<br>
C.\t$36^\\circ$.<br>
D.\t$54^\\circ$.
</div><div style="clear: both;"></div>`
        },
        hint: {
            tc: `利用切線與弦的夾角及圓周角。 `,
            en: `Use angle in alternate segment and angles in a circle.`
        },
        solution: `C (47%)<p><iframe src="https://www.youtube.com/embed/fgxWA5VyoRM?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q42",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Geometry"],
        topic: ["Equations of Circles", "Equations of Straight Lines"],
        difficulty: 2,
        content: {
            tc: `求 $k$ 值的範圍使得圓 $x^2 + y^2 + 2x - 4y - 13 = 0$ 與直線 $x - y + k = 0$ 相交於兩相異點。 
<div class="q-mcopt">
A.\t$-9 < k < 3$<br>
B.\t$-3 < k < 9$<br>
C.\t$k < -9$  或  $k > 3$<br>
D.\t$k < -3$  或  $k > 9$
</div>`,
            en: `Find the range of values of $k$ such that the circle $x^2 + y^2 + 2x - 4y - 13 = 0$ and the straight line $x - y + k = 0$ intersect at two distinct points.
<div class="q-mcopt">
A.\t$-9 < k < 3$<br>
B.\t$-3 < k < 9$<br>
C.\t$k < -9$ or $k > 3$<br>
D.\t$k < -3$ or $k > 9$
</div>`
        },
        hint: {
            tc: `將直線代入圓方程後令判別式 $> 0$。 `,
            en: `Substitute line equation into circle equation and set discriminant $> 0$.`
        },
        solution: `B (36%)<p><iframe src="https://www.youtube.com/embed/x2dATTCJeYw?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q43",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Permutations and Combinations"],
        difficulty: 2,
        content: {
            tc: `某戲劇學會由 $12$ 名男生及 $8$ 名女生組成。 若從該學會中選出 $5$ 名學生為一隊參加比賽且該隊至少有一名女生，則可組成多少不同的隊？
<div class="q-mcopt">
A.\t$3\\,960$<br>
B.\t$14\\,712$<br>
C.\t$15\\,448$<br>
D.\t$15\\,504$
</div>`,
            en: `A drama club is formed by $12$ boys and $8$ girls. If a team of $5$ students is selected from the club to participate in a competition and the team consists of at least one girl, how many different teams can be formed?
<div class="q-mcopt">
A.\t$3\\,960$<br>
B.\t$14\\,712$<br>
C.\t$15\\,448$<br>
D.\t$15\\,504$
</div>`
        },
        hint: {
            tc: `總組合減去全是男生的組合。 `,
            en: `Subtract all-boy teams from total possible combinations.`
        },
        solution: `B (53%)<p><iframe src="https://www.youtube.com/embed/Erda4mrCGFU?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q44",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Probability"],
        difficulty: 2,
        content: {
            tc: `某盒子中有六個球，該六個球分別記有數字 $7$、$8$、$8$、$9$、$9$ 及 $9$。 <u>偉明</u>從該盒子中隨機重複取球，每次只取出一個且不放回該盒子中，直至取出的數字是 $9$ 為止。 求他需要取球恰好三次的概率。 
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$<br>
B.\t$\\dfrac{1}{6}$<br>
C.\t$\\dfrac{1}{8}$<br>
D.\t$\\dfrac{3}{20}$
</div>`,
            en: `A box contains six balls numbered $7$, $8$, $8$, $9$, $9$ and $9$ respectively. John repeats drawing one ball at a time randomly from the box without replacement until the number drawn is $9$. Find the probability that he needs exactly three draws.
<div class="q-mcopt">
A.\t$\\dfrac{1}{2}$<br>
B.\t$\\dfrac{1}{6}$<br>
C.\t$\\dfrac{1}{8}$<br>
D.\t$\\dfrac{3}{20}$
</div>`
        },
        hint: {
            tc: `前兩次非 9，第三次為 9。 `,
            en: `First two draws non-9, third draw is 9.`
        },
        solution: `D (56%)<p><iframe src="https://www.youtube.com/embed/FvuORCh-RA0?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    },
    {
        id: "2012-DSE-MATH-CP2-Q45",
        year: 2012,
        type: "P2",
        section: "MC_B",
        level: ["Senior"],
        domain: ["Data Handling"],
        topic: ["Measures of Central Tendency", "Measures of Dispersion", "Change of Data"],
        difficulty: 2,
        content: {
            tc: `設 $m_1$、$r_1$ 及 $v_1$ 分別為某組數 $\\{x_1, x_2, x_3, \\dots, x_{100}\\}$ 的平均值、分佈域及方差。 若 $m_2$、$r_2$ 及 $v_2$ 分別為 $\\{x_1, x_2, x_3, \\dots, x_{100}, m_1\\}$ 這組數的平均值、分佈域及方差，則下列何者必為正確？
<div class="q-mcms">
I.\t$m_1 = m_2$
II.\t$r_1 = r_2$
III.\t$v_1 = v_2$
</div>
<div class="q-mcopt">
A.\t只有 I 及 II<br>
B.\t只有 I 及 III<br>
C.\t只有 II 及 III<br>
D.\tI、II 及 III
</div>`,
            en: `Let $m_1$, $r_1$ and $v_1$ be the mean, the range and the variance of a group of numbers $\\{x_1, x_2, x_3, \\dots, x_{100}\\}$ respectively. If $m_2$, $r_2$ and $v_2$ are the mean, the range and the variance of the group of numbers $\\{x_1, x_2, x_3, \\dots, x_{100}, m_1\\}$ respectively, which of the following must be true?
<div class="q-mcms">
I.\t$m_1 = m_2$
II.\t$r_1 = r_2$
III.\t$v_1 = v_2$
</div>
<div class="q-mcopt">
A.\tI and II only<br>
B.\tI and III only<br>
C.\tII and III only<br>
D.\tI, II and III
</div>`
        },
        hint: {
            tc: `加入平均值不改變平均值及分佈域。 `,
            en: `Adding the mean value does not change the mean or range.`
        },
        solution: `C (36%)<p><iframe src="https://www.youtube.com/embed/cS3FauMoPkQ?autoplay=0&rel=0" title="解題影片" loading="lazy" style="max-width: 100%; max-height: 40vh; aspect-ratio: 16/9;" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
);
