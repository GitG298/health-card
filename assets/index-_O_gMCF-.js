(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const $t=`
  <div id="setup" class="screen hidden">
    <div class="setup-inner">
      <div class="setup-head">
        <div class="setup-logo">
          <svg viewBox="0 0 48 48" width="64" height="64" aria-hidden="true">
            <rect x="2" y="2" width="44" height="44" rx="11" fill="#1F6E52"/>
            <line x1="10" y1="26" x2="38" y2="26" stroke="#fff" stroke-width="2.6" stroke-dasharray="4 2.6"/>
            <polyline points="14,24 21,31 34,17" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="36" cy="26" r="3" fill="#F4B13E"/>
          </svg>
        </div>
        <h1>健康卡</h1>
        <p class="setup-sub">美丽人生由自己掌控，从点滴开始！</p>
      </div>

      <form id="setup-form">
        <div class="setup-card">
          <div class="setup-who">基本信息 · 一次性填好</div>
          <div class="field-row">
            <span>性别</span>
            <div class="sex-seg" id="sex-seg" role="tablist" aria-label="选择性别">
              <button type="button" class="sex-btn active" data-sex="male" role="tab" aria-selected="true">男</button>
              <button type="button" class="sex-btn" data-sex="female" role="tab" aria-selected="false">女</button>
            </div>
          </div>
          <label class="field-row">
            <span>年龄</span>
            <span class="field-input"><input id="su-age" type="number" inputmode="numeric" min="12" max="90" placeholder="28" required></span>
          </label>
          <label class="field-row">
            <span>身高 cm</span>
            <span class="field-input"><input id="su-height" type="number" inputmode="numeric" min="130" max="220" placeholder="174" required></span>
          </label>
          <label class="field-row">
            <span>当前体重 kg</span>
            <span class="field-input"><input id="su-weight" type="number" inputmode="decimal" step="0.1" min="30" max="200" placeholder="75.0" required></span>
          </label>
          <label class="field-row">
            <span>目标体重 kg</span>
            <span class="field-input"><input id="su-target" type="number" inputmode="decimal" step="0.1" min="30" max="200" placeholder="70.0" required></span>
          </label>
          <label class="field-row">
            <span>减脂速度 kg/周</span>
            <span class="field-input"><input id="su-speed" type="number" inputmode="decimal" step="0.05" min="0.1" max="1" value="0.45" required></span>
          </label>
          <p class="setup-field-note">建议 0.3~0.7 kg/周，超过 0.8 不推荐</p>
        </div>
        <button type="submit" class="btn-primary">开始打卡</button>
        <p class="setup-note">数据只保存在你自己的手机上</p>
      </form>
    </div>
  </div>

  <div id="app" class="app hidden">
    <header class="topbar">
      <div class="app-title">健康卡</div>
      <button id="btn-reset" class="topbar-reset" title="设置">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.8v3M12 18.2v3M21.2 12h-3M5.8 12h-3M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1M18.5 18.5l-2.1-2.1M7.6 7.6L5.5 5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </header>

    <main class="pages">
      <section id="page-today" class="page">
        <div class="date-strip" id="date-strip"></div>

        <div class="hero-card" id="today-hero">
          <div class="hero-left">
            <div class="hero-date" id="hero-date"></div>
            <div class="hero-count"><b id="hero-done">0</b>/<span id="hero-total">6</span> 项完成</div>
            <div class="hero-word" id="hero-word">先从喝水开始</div>
          </div>
          <div class="ring" id="today-ring">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <circle class="ring-track" cx="50" cy="50" r="42"/>
              <circle class="ring-fill" id="ring-fill" cx="50" cy="50" r="42"/>
            </svg>
            <span class="ring-pct" id="ring-pct">0%</span>
          </div>
        </div>

        <button class="cal-card hidden" id="cal-card">
          <div class="cal-left">
            <div class="cal-title">今日热量</div>
            <div class="cal-nums"><b id="cal-eat">0</b> / <span id="cal-target">--</span> kcal</div>
            <div class="cal-floor">安全下限 <b id="cal-min">--</b> kcal</div>
          </div>
          <div class="cal-bar"><div class="cal-bar-fill" id="cal-bar-fill"></div></div>
        </button>

        <div class="free-meal-card" id="free-meal-card">
          <div>
            <div class="fm-title">自由餐</div>
            <div class="fm-sub" id="fm-sub">每周 1 次，放开吃一顿不算失败</div>
          </div>
          <button class="fm-btn" id="fm-btn">使用</button>
        </div>

        <ul class="task-list" id="task-list"></ul>

        <div class="week-train-card">
          <div class="wt-head">本周训练</div>
          <div class="wt-row">
            <div class="wt-item">
              <div class="wt-num"><b id="wt-walk">0</b>/2</div>
              <div class="wt-label">快走 30 分钟</div>
            </div>
            <div class="wt-item">
              <div class="wt-num"><b id="wt-strength">0</b>/3</div>
              <div class="wt-label">力量 25 分钟</div>
            </div>
          </div>
        </div>
      </section>

      <section id="page-diet" class="page hidden">
        <div class="cal-hero">
          <div class="ch-top">
            <div>
              <div class="wh-label">今日已摄入</div>
              <div class="ch-num"><b id="d-eat">0</b><i>kcal</i></div>
            </div>
            <div class="ch-side">
              <div class="ch-chip" id="d-chip">--</div>
              <div class="wh-side-sub" id="d-chip-sub">还可吃 -- kcal</div>
            </div>
          </div>
          <div class="ch-bar"><div class="ch-bar-fill" id="d-bar-fill"></div><div class="ch-bar-min" id="d-bar-min"></div></div>
          <div class="ch-axis"><span>下限 <b id="d-min">--</b></span><span>目标 <b id="d-target">--</b></span></div>
        </div>

        <div class="form-card">
          <div class="form-head">拍照记录这一餐</div>
          <div class="photo-row">
            <button class="photo-btn" id="photo-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 8.5A2 2 0 0 1 6 6.5h1.5l1-1.6h3l1 1.6H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>
              <span>拍一张</span>
            </button>
            <button class="photo-btn" id="album-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.5 16.5l4.5-4.5 3.5 3.5 3-3 6 6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="9" cy="9.5" r="1.6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>
              <span>从相册选</span>
            </button>
          </div>
          <input id="photo-input" type="file" accept="image/*" capture="environment" class="visually-hidden">
          <input id="album-input" type="file" accept="image/*" class="visually-hidden">
          <div class="photo-preview-row hidden" id="photo-preview-row">
            <div class="photo-wrap">
              <img id="photo-preview" class="photo-preview" alt="这一餐的照片">
              <button class="photo-del" id="photo-del" aria-label="删除照片">✕</button>
            </div>
            <button class="btn-ghost ai-btn" id="ai-btn">AI 识别热量</button>
          </div>
        </div>

        <div class="form-card">
          <div class="form-head">推荐搭配 <span class="form-head-sub" id="combo-time-label">午餐</span></div>
          <div class="chip-row" id="meal-time-chips">
            <button class="chip" data-time="break">早餐</button>
            <button class="chip active" data-time="lunch">午餐</button>
            <button class="chip" data-time="dinner">晚餐</button>
            <button class="chip" data-time="snack">加餐</button>
          </div>
          <div class="combo-card">
            <div class="combo-main">
              <div class="combo-name" id="combo-name">--</div>
              <div class="combo-items" id="combo-items">--</div>
            </div>
            <div class="combo-cal"><b id="combo-cal">--</b><i>kcal</i></div>
          </div>
          <div class="combo-btns">
            <button class="btn-ghost sm" id="combo-next">换一个</button>
            <button class="btn-primary sm" id="combo-pick">就吃这个</button>
          </div>
          <p class="form-tip">常选的搭配会排在前面优先推荐</p>
        </div>

        <div class="form-card">
          <div class="form-head">手动记录</div>
          <label class="form-cell">
            <span>吃了什么</span>
            <input id="meal-food" type="text" placeholder="例：卤鸡腿1个、半份米饭、清炒青菜">
          </label>
          <div class="form-row">
            <label class="form-cell">
              <span>估算热量</span>
              <input id="meal-cal" type="number" inputmode="numeric" min="0" max="3000" placeholder="0">
            </label>
            <div class="form-cell form-btn-cell">
              <button class="btn-primary" id="meal-save">记入</button>
            </div>
          </div>
          <p class="form-tip">食堂口诀估算：一掌蛋白≈150 · 一拳主食≈200 · 两拳蔬菜≈100 · 油大的菜再加100</p>
        </div>

        <div class="record-card">
          <div class="record-title">今天吃过</div>
          <ul class="meal-log" id="meal-log"></ul>
        </div>
      </section>

      <section id="page-sport" class="page hidden">
        <div class="sport-hero">
          <div class="sp-title">运动推荐</div>
          <div class="sp-text">按场景和目标挑一个，动起来就算数</div>
        </div>

        <div class="form-card">
          <div class="chip-group-label">场景</div>
          <div class="chip-row" id="scene-chips">
            <button class="chip active" data-scene="home">居家</button>
            <button class="chip" data-scene="outdoor">户外</button>
            <button class="chip" data-scene="gym">健身房</button>
          </div>
          <div class="chip-group-label">锻炼目标</div>
          <div class="chip-row" id="goal-chips">
            <button class="chip active" data-goal="fatburn">减脂</button>
            <button class="chip" data-goal="shape">塑形</button>
            <button class="chip" data-goal="fitness">体能</button>
          </div>
        </div>

        <div class="rec-list" id="rec-list"></div>

        <div class="train-today">
          <button class="tt-btn" id="tt-walk">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19c1.5-3 2-6.5 2-10l3-2 2 2.5 3 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11l1 3.5 3 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="4.8" r="1.6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>
            <span>快走 30 分钟</span><i id="tt-walk-state"></i>
          </button>
          <button class="tt-btn" id="tt-strength">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8v8M4.5 9.5v5M17 8v8M19.5 9.5v5M7 12h10" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>
            <span>力量 25 分钟</span><i id="tt-str-state"></i>
          </button>
        </div>

        <div class="form-card">
          <div class="form-head">其他运动</div>
          <div class="form-row">
            <label class="form-cell">
              <span>运动</span>
              <input id="sport-name" type="text" placeholder="例：羽毛球、爬山、骑行">
            </label>
            <label class="form-cell">
              <span>分钟</span>
              <input id="sport-min" type="number" inputmode="numeric" min="1" max="300" placeholder="0">
            </label>
          </div>
          <button class="btn-primary" id="sport-save">打卡</button>
        </div>

        <div class="record-card">
          <div class="record-title">今天的运动</div>
          <ul class="meal-log" id="sport-log"></ul>
        </div>
      </section>

      <section id="page-record" class="page hidden">
        <div class="weight-hero" id="weight-hero">
          <div class="wh-row">
            <div>
              <div class="wh-label">最新体重</div>
              <div class="wh-num"><b id="w-latest">--</b><i>kg</i></div>
            </div>
            <div class="wh-side">
              <div class="wh-chip" id="w-diff-chip">--</div>
              <div class="wh-side-sub" id="w-diff-sub">与标准线的距离</div>
            </div>
          </div>
          <div class="wh-line" id="wh-line"></div>
          <div class="wh-meta">
            <span>起始 <b id="w-start">--</b></span>
            <span>标准线 <b id="w-expected">--</b></span>
            <span>目标 <b id="w-target">--</b></span>
          </div>
        </div>

        <div class="chart-card">
          <div class="chart-title">体重趋势 · 标准线为虚线</div>
          <div class="chart-box" id="chart-box"></div>
          <div class="chart-empty hidden" id="chart-empty">记录两次体重后，这里会画出你的曲线</div>
        </div>

        <div class="record-card">
          <div class="record-title">称重记录（每周日晨起空腹，腰围可选）</div>
          <div class="record-input-row">
            <input id="w-input" type="number" inputmode="decimal" step="0.1" min="30" max="200" placeholder="体重 kg">
            <input id="waist-input" type="number" inputmode="decimal" step="0.1" min="30" max="200" placeholder="腰围 cm">
            <button class="btn-primary" id="w-save">记录</button>
          </div>
          <ul class="weight-log" id="weight-log"></ul>
        </div>

        <div class="adjust-card hidden" id="adjust-card">
          <div class="adj-banner">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 3 2.5 20h19L12 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="12" y1="10" x2="12" y2="14.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1" fill="currentColor"/></svg>
            <div>
              <div class="adj-title" id="adj-title">超出标准线</div>
              <div class="adj-sub" id="adj-sub"></div>
            </div>
          </div>
          <div class="adj-body" id="adjust-body"></div>
        </div>

        <div class="adjust-active hidden" id="adjust-active">
          <div class="aa-head">
            <div class="aa-badge">纠偏模式 · 剩 <b id="aa-days">7</b> 天</div>
            <button class="aa-close" id="aa-close">提前结束</button>
          </div>
          <p class="aa-text" id="aa-text"></p>
        </div>

        <div class="section-divider"></div>

        <div class="stat-grid">
          <div class="stat-card">
            <div class="stat-num" id="st-streak">0</div>
            <div class="stat-label">连续打卡 · 天</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" id="st-week-rate">--</div>
            <div class="stat-label">本周完成率</div>
          </div>
          <div class="stat-card">
            <div class="stat-num" id="st-kg">--</div>
            <div class="stat-label">累计变化 kg</div>
          </div>
        </div>

        <div class="rule-card">
          <div class="rule-head">本周总览</div>
          <div class="ov-row"><span class="ov-name">餐饮</span><span class="ov-val" id="ov-meals">--</span></div>
          <div class="ov-row"><span class="ov-name">运动</span><span class="ov-val" id="ov-sports">--</span></div>
        </div>

        <div class="rule-card">
          <div class="rule-head">每条规则的本周表现</div>
          <ul class="rule-list" id="rule-list"></ul>
          <p class="rule-tip" id="rule-tip"></p>
        </div>

        <div class="review-card">
          <div class="review-head">周日复盘会 · 10 分钟</div>
          <ul class="review-list">
            <li>哪条规则做到了、哪条最难？</li>
            <li>下周只改一件事</li>
          </ul>
        </div>
      </section>
    </main>

    <nav class="tabbar">
      <button class="tab active" data-page="today">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><polyline points="8,12.4 11,15.2 16.2,9.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>今日</span>
      </button>
      <button class="tab" data-page="diet">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11h16c0 4.2-2.6 7-6.2 7.6L13 21h-2l-.8-2.4C6.6 18 4 15.2 4 11z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8c0-1.6 1.2-2 1.2-3.4M12 8c0-1.6 1.2-2 1.2-3.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        <span>饮食</span>
      </button>
      <button class="tab" data-page="sport">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19c1.5-3 2-6.5 2-10l3-2 2 2.5 3 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11l1 3.5 3 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="4.8" r="1.6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>
        <span>运动</span>
      </button>
      <button class="tab" data-page="record">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="6" width="17" height="13" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 6c0-2 1.3-3 3-3s3 1 3 3" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="12" y1="10.5" x2="13.8" y2="14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        <span>记录</span>
      </button>
    </nav>

    <div id="settings-mask" class="sheet-mask hidden">
      <div class="sheet" role="dialog" aria-label="个人设置">
        <div class="sheet-head">
          <span>设置</span>
          <button class="sheet-close" id="st-close" aria-label="关闭设置">✕</button>
        </div>
        <div class="sheet-body">
          <div class="form-row">
            <label class="form-cell">
              <span>性别</span>
              <select id="st-sex"><option value="male">男</option><option value="female">女</option></select>
            </label>
            <label class="form-cell">
              <span>年龄</span>
              <input id="st-age" type="number" inputmode="numeric" min="12" max="90" placeholder="28">
            </label>
          </div>
          <div class="form-row">
            <label class="form-cell">
              <span>身高 cm</span>
              <input id="st-height" type="number" inputmode="numeric" min="130" max="220" placeholder="174">
            </label>
            <label class="form-cell">
              <span>目标体重 kg</span>
              <input id="st-target" type="number" inputmode="decimal" step="0.1" min="30" max="200" placeholder="70">
            </label>
          </div>
          <div class="form-row">
            <label class="form-cell">
              <span>减脂速度 kg/周</span>
              <input id="st-speed" type="number" inputmode="decimal" step="0.05" min="0.1" max="1" value="0.45">
            </label>
            <div class="form-cell"></div>
          </div>
          <button class="btn-primary" id="st-calc">计算每日热量目标</button>
          <div class="st-result" id="st-result"></div>
          <button class="btn-ghost" id="st-save">保存设置</button>
          <div class="st-divider"></div>
          <div class="sheet-sec-title">AI 识别热量（可选）</div>
          <label class="form-cell">
            <span>API Key</span>
            <input id="ai-key" type="password" placeholder="百炼 API Key，sk- 开头" autocomplete="off">
          </label>
          <div class="form-row">
            <label class="form-cell">
              <span>接口地址</span>
              <input id="ai-base" type="text" placeholder="https://dashscope.aliyuncs.com/compatible-mode/v1">
            </label>
          </div>
          <label class="form-cell">
            <span>模型</span>
            <input id="ai-model" type="text" placeholder="qwen-vl-plus">
          </label>
          <button class="btn-ghost" id="st-ai-save">保存 AI 配置</button>
          <p class="setup-note">到阿里云百炼（bailian.console.aliyun.com）开通服务并创建 API Key，新用户有免费额度。Key 只保存在你自己的手机上。</p>
          <div class="st-divider"></div>
          <button class="btn-danger" id="st-clear">清空全部数据</button>
          <p class="setup-note">建议 0.3~0.7 kg/周，超过 0.8 不推荐</p>
        </div>
      </div>
    </div>
  </div>

  <div id="toast" class="toast" role="status"></div>
`,Z="fz_v1",St=7*864e5,jt=.45;function s(t){const e=document.querySelector(t);if(!e)throw new Error("missing element: "+t);return e}function E(t){return document.querySelectorAll(t)}function tt(t){return t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0")}function y(t){const[e,i,n]=t.split("-").map(Number);return new Date(e,i-1,n)}function h(){return tt(new Date)}function J(t,e){const i=y(t);return i.setDate(i.getDate()+e),tt(i)}function Tt(t){const e=y(t),i=(e.getDay()+6)%7;return e.setDate(e.getDate()-i),tt(e)}function _(t){const e=Tt(t);return Array.from({length:7},(i,n)=>J(e,n))}const at=["一","二","三","四","五","六","日"];function w(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}let V=null;function p(t){const e=s("#toast");e.textContent=t,e.classList.add("show"),V&&clearTimeout(V),V=setTimeout(()=>e.classList.remove("show"),2200)}let a=null,b=h();function H(t,e){const o=(10*(e||70)+6.25*t.height-5*t.age+(t.sex==="male"?5:-161))*1.4,r=t.speed*7700/7,u=t.sex==="male"?1500:1200;return{calTarget:Math.round(Math.max(o-r,u)),calMin:u}}function Ft(t,e,i){const n=H(t,e);return{v:2,profile:{...t,...n},target:i,weights:[{d:h(),w:e,waist:null}],meals:[],sports:[],picks:{},days:{},adjust:{on:!1,until:null}}}function At(t){const e=t&&t.users&&t.users.me?t.users.me:null;if(!e)return null;const i=e.profile,n=e.start??(e.weights&&e.weights[0]?e.weights[0].w:70),o=e.target??n,r=i?{...i,...H(i,n)}:{sex:"male",age:28,height:174,speed:.45,...H({sex:"male",age:28,height:174,speed:.45},n)},u=(e.weights||[]).map(m=>({d:m.d,w:m.w,waist:m.waist??null})),c={};return Object.entries(t.days||{}).forEach(([m,L])=>{const x=L&&L.me;x&&(c[m]={t:x.t||{},train:x.train||{},free:!!x.free})}),{v:2,profile:r,target:o,weights:u.length?u:[{d:h(),w:n,waist:null}],meals:e.meals||[],sports:e.sports||[],picks:{},days:c,adjust:e.adjust||{on:!1,until:null}}}function Dt(){try{const t=localStorage.getItem(Z);if(!t)return null;const e=JSON.parse(t);return e&&e.v===2&&e.profile&&e.weights?e:At(e)}catch{return null}}function f(){localStorage.setItem(Z,JSON.stringify(a))}const nt={water:'<svg viewBox="0 0 24 24"><path d="M12 3.5C9.2 7.8 6.5 10.8 6.5 14.2a5.5 5.5 0 0 0 11 0c0-3.4-2.7-6.4-5.5-10.7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',activate:'<svg viewBox="0 0 24 24"><path d="M13 2 5 13h5l-1 9 8-11h-5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',noSug:'<svg viewBox="0 0 24 24"><path d="M6 8h9l-.8 11.2a1.8 1.8 0 0 1-1.8 1.6H8.6a1.8 1.8 0 0 1-1.8-1.6L6 8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 8V5.5c0-1 .8-1.8 1.8-1.8H15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="4.5" y1="4" x2="19.5" y2="20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',noLate:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12.5" r="7.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 8.5v4l2.8 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 3h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',order:'<svg viewBox="0 0 24 24"><line x1="5" y1="7" x2="19" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',sleep:'<svg viewBox="0 0 24 24"><path d="M19.5 14.5A8 8 0 0 1 9.5 4.6 8 8 0 1 0 19.5 14.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M17 5.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" fill="currentColor"/></svg>',half:'<svg viewBox="0 0 24 24"><path d="M4.5 14h15a7.5 7.5 0 0 1-15 0z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="4.5" y1="14" x2="19.5" y2="14" stroke="currentColor" stroke-width="1.8"/><path d="M12 6v4m0-4-2 2m2-2 2 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'},vt=[{id:"water",type:"count",max:2,steps:["上午","下午"],numBtns:!0,label:"喝够 2L 水",sub:"上午一瓶 · 下午一瓶"},{id:"activate",type:"count",max:2,steps:["提拉","开合跳"],numBtns:!0,label:"激活身体",sub:"1 提拉 · 2 开合跳"},{id:"noSug",type:"check",label:"没有含糖饮料、蛋糕、含油零食",sub:"奶茶果汁可乐甜品薯片都算"},{id:"order",type:"count",max:3,steps:["早","午","晚"],numBtns:!0,label:"先菜 → 蛋白 → 主食",sub:"每一餐都按这个顺序吃"},{id:"noLate",type:"check",label:"20 点后没进食",sub:"饿了吃黄瓜、无糖酸奶"},{id:"sleep",type:"check",label:"23:30 前上床",sub:"手机放到够不着的地方"}],It={id:"half",type:"check",label:"主食每餐减半",sub:"米饭面条都减一半"};function k(t,e){if(!a)throw new Error("state not ready");if(!a.days[t]){if(!e)return null;a.days[t]={t:{},train:{},free:!1}}return a.days[t]}function Bt(t){return!!(a&&a.adjust&&a.adjust.on&&a.adjust.until&&t<=a.adjust.until)}function ht(t){const e=vt.slice();return Bt(t)&&e.push({...It,type:"check"}),e}function N(t,e){return t?t.free&&(e.id==="noSug"||e.id==="order")?1:e.type==="count"?(Number(t.t[e.id])||0)/(e.max||1):t.t[e.id]?1:0:0}function q(t){if(!a)return 0;const e=k(t,!1),i=ht(t),n=i.reduce((o,r)=>o+N(e,r),0);return i.length?n/i.length:0}function lt(t,e){return _(t).reduce((i,n)=>{const o=k(n,!1);return i+(o&&o.train&&o.train[e]?1:0)},0)}let ot="male";function Ht(){E(".sex-btn").forEach(t=>{t.addEventListener("click",()=>{ot=t.dataset.sex==="female"?"female":"male",E(".sex-btn").forEach(e=>{const i=e===t;e.classList.toggle("active",i),e.setAttribute("aria-selected",i?"true":"false")})})}),s("#setup-form").addEventListener("submit",t=>{t.preventDefault();const e=parseInt(s("#su-age").value,10),i=parseFloat(s("#su-height").value),n=parseFloat(s("#su-weight").value),o=parseFloat(s("#su-target").value),r=parseFloat(s("#su-speed").value);if(!isFinite(e)||e<12||e>90){p("年龄填 12–90");return}if(!isFinite(i)||i<130||i>220){p("身高填 130–220 cm");return}if(!isFinite(n)||n<30||n>200){p("当前体重填 30–200 kg");return}if(!isFinite(o)||o<30||o>200){p("目标体重填 30–200 kg");return}if(!isFinite(r)||r<.1||r>1){p("减脂速度建议 0.3–0.7");return}const u={sex:ot,age:e,height:i,speed:r};if(a){const c=H(u,B(a).w);a.profile={...u,...c},a.target=o,f()}else a=Ft(u,n,o),f();ft(),p("打卡正式开始，先把今天的任务看一眼")})}function ft(){a&&(s("#setup").classList.add("hidden"),s("#app").classList.remove("hidden"),b=h(),Vt())}function M(){if(!a)return;const t=k(b,!1)||{t:{},free:!1},e=ht(b),i=h(),n=s("#date-strip");n.innerHTML="",_(b).forEach(l=>{const d=document.createElement("button");d.className="ds-day"+(l===b?" today":"")+(l>i?" future":""),l<=i&&q(l)>=.8&&d.classList.add("done"),d.innerHTML=`<div class="ds-dow">${at[(y(l).getDay()+6)%7]}</div><div class="ds-num">${y(l).getDate()}</div><div class="ds-dot"></div>`,d.addEventListener("click",()=>{if(l>i){p("未来还没到，先过好今天");return}b=l,M()}),n.appendChild(d)});const o=y(b);s("#hero-date").textContent=`${o.getMonth()+1} 月 ${o.getDate()} 日 · 周${at[(o.getDay()+6)%7]}`+(b===i?"":" · 补打卡");const r=e.reduce((l,d)=>l+N(t,d),0),u=e.length||1,c=e.filter(l=>N(t,l)>=1).length;s("#hero-done").textContent=String(c),s("#hero-total").textContent=String(e.length);const m=Math.round(r/u*100);s("#ring-pct").textContent=m+"%";const L=2*Math.PI*42;s("#ring-fill").style.strokeDashoffset=String(L*(1-r/u)),s("#hero-word").textContent=m===0?"先从喝第一瓶水开始":m<50?"已经动起来了，继续保持":m<100?"就差一点点了":"今天全部完成，漂亮";const x=_(b).some(l=>{const d=k(l,!1);return!!(d&&d.free)}),S=s("#fm-btn");S.textContent=t.free?"已使用":x?"本周已用":"使用",S.classList.toggle("used",!!(t.free||x)),s("#fm-sub").textContent=t.free?"今天这顿放开吃，不算失败":x?"每周 1 次，下周再来":"每周 1 次，放开吃一顿不算失败";const $=s("#task-list");$.innerHTML="",e.forEach(l=>{const d=document.createElement("li"),g=N(t,l);d.className="task"+(g>=1?" done":"");const I=t.free&&(l.id==="noSug"||l.id==="order")?'<span class="task-tag">自由餐豁免</span>':l.id==="half"?'<span class="task-tag">纠偏</span>':"";if(l.type==="count"&&l.steps){const v=Number(t.t[l.id])||0,P=l.steps.map((C,j)=>l.numBtns?`<div class="tcb-col"><button class="check check-sm${v>=j+1?" on":""}" data-c="${j+1}" aria-label="${w(C)}"></button><div class="tcb-label">${w(C)}</div></div>`:`<div><button class="tcb${v>=j+1?" on":""}" data-c="${j+1}" aria-label="${w(C)}">${w(C)}</button><div class="tcb-label">${w(C)}</div></div>`).join(""),X=l.numBtns?"":`<div class="task-sub">${w(l.sub)}</div>`;d.innerHTML=`
        <div class="task-icon">${nt[l.id]}</div>
        <div class="task-mid">
          <div class="task-label">${w(l.label)}${I}</div>
          ${X}
        </div>
        <div class="task-count-btns">${P}</div>`,d.querySelectorAll(".tcb").forEach(C=>{C.addEventListener("click",()=>{const j=+(C.dataset.c||"0"),it=k(b,!0),Et=Number(it.t[l.id])||0;it.t[l.id]=Et>=j?j-1:j,f(),M()})})}else d.innerHTML=`
        <div class="task-icon">${nt[l.id]}</div>
        <div class="task-mid">
          <div class="task-label">${w(l.label)}${I}</div>
          <div class="task-sub">${w(l.sub)}</div>
        </div>
        <button class="check" aria-label="完成 ${w(l.label)}"></button>`,d.querySelector(".check").addEventListener("click",()=>{const v=k(b,!0);v.t[l.id]=!v.t[l.id],f(),M(),q(b)>=1&&p("今日全绿，干得漂亮")});$.appendChild(d)}),s("#wt-walk").textContent=String(lt(b,"walk")),s("#wt-strength").textContent=String(lt(b,"strength"))}function gt(){if(!a)return[];const t=h();return a.meals.filter(e=>e.d===t)}function bt(){return gt().reduce((t,e)=>t+(e.cal||0),0)}const et={break:"早餐",lunch:"午餐",dinner:"晚餐",snack:"加餐"};function U(){if(!a)return;const t=a.profile;s("#cal-card").classList.remove("hidden");const i=bt();s("#cal-eat").textContent=String(i),s("#cal-target").textContent=String(t.calTarget),s("#cal-min").textContent=String(t.calMin);const n=Math.min(100,Math.round(i/t.calTarget*100)),o=s("#cal-bar-fill");o.style.width=n+"%",o.classList.toggle("over",i>t.calTarget)}const rt={break:[{id:"b1",name:"经典早餐",items:"鸡蛋2个 · 牛奶250ml · 蒸土豆150g · 番茄1个",cal:430},{id:"b2",name:"轻卡早餐",items:"鸡胸肉100g · 苹果1个 · 全麦面包2片",cal:400},{id:"b3",name:"燕麦早餐",items:"燕麦粥1碗 · 鸡蛋1个 · 香蕉1根",cal:420},{id:"b4",name:"豆浆早餐",items:"无糖豆浆300ml · 全麦馒头1个 · 鸡蛋1个",cal:430},{id:"b5",name:"粗粮早餐",items:"玉米1根 · 鸡蛋1个 · 无糖酸奶1杯",cal:410},{id:"b6",name:"中式早餐",items:"小米粥1碗 · 鸡蛋1个 · 凉拌黄瓜1份",cal:360},{id:"b7",name:"低 GI 早餐",items:"杂粮包1个 · 煮蛋1个 · 无糖豆浆1杯 · 圣女果几颗",cal:400}],lunch:[{id:"l1",name:"清蒸鱼套餐",items:"杂粮饭1小碗 · 清蒸鲈鱼 · 炒时蔬",cal:520},{id:"l2",name:"卤鸡腿套餐",items:"米饭半碗 · 卤鸡腿去皮 · 凉拌菜",cal:560},{id:"l3",name:"荞麦面",items:"荞麦面1碗 · 鸡胸肉 · 番茄青菜",cal:550},{id:"l4",name:"虾仁西兰花",items:"蒸红薯1个 · 虾仁西兰花 · 凉拌豆腐",cal:500},{id:"l5",name:"瘦肉套餐",items:"米饭半碗 · 瘦肉炒时蔬 · 紫菜蛋花汤",cal:530},{id:"l6",name:"牛肉套餐",items:"糙米饭半碗 · 卤牛肉100g · 白灼菜心",cal:540},{id:"l7",name:"鸡丝拌面",items:"全麦面1小碗 · 鸡丝 · 黄丝豆芽 · 少油酱汁",cal:520},{id:"l8",name:"冬瓜丸子汤套餐",items:"米饭半碗 · 冬瓜丸子汤 · 清炒油麦菜",cal:500}],dinner:[{id:"d1",name:"轻食晚餐",items:"蔬菜沙拉 · 鸡胸肉 · 油醋汁",cal:380},{id:"d2",name:"蒸煮晚餐",items:"蒸南瓜 · 白灼虾仁 · 清炒青菜",cal:380},{id:"d3",name:"豆腐晚餐",items:"豆腐青菜汤 · 凉拌菜 · 玉米半根",cal:350},{id:"d4",name:"小碗面晚餐",items:"番茄鸡蛋面小碗 · 烫青菜",cal:450},{id:"d5",name:"杂粮晚餐",items:"小碗杂粮饭 · 清蒸鱼 · 蒜蓉西兰花",cal:430},{id:"d6",name:"喝汤晚餐",items:"冬瓜排骨汤(去浮油) · 拌木耳 · 小份红薯",cal:400},{id:"d7",name:"轻主食晚餐",items:"魔芋丝拌鸡丝 · 番茄 · 黄瓜",cal:330}],snack:[{id:"s1",name:"下午加餐",items:"苹果1个 · 无糖酸奶",cal:150},{id:"s2",name:"夜宵替代",items:"黄瓜1根 · 煮蛋1个",cal:120},{id:"s3",name:"坚果加餐",items:"原味坚果1小把(约15g)",cal:180},{id:"s4",name:"水果加餐",items:"香蕉1根",cal:90},{id:"s5",name:"饱腹加餐",items:"无糖豆浆 · 全麦面包1片",cal:200}]};let T="lunch",K=0,O=null;function wt(t){return a?rt[t].slice().sort((e,i)=>(a.picks[i.id]||0)-(a.picks[e.id]||0)):rt[t]}function kt(){const t=wt(T);return t.length?t[K%t.length]:null}function R(){s("#combo-time-label").textContent=et[T]||T;const t=kt();t&&(s("#combo-name").textContent=t.name,s("#combo-items").textContent=t.items,s("#combo-cal").textContent=String(t.cal))}function z(){if(!a)return;const t=a.profile,e=bt();s("#d-eat").textContent=String(e),s("#d-min").textContent=String(t.calMin),s("#d-target").textContent=String(t.calTarget);const i=t.calTarget-e,n=s("#d-chip");e<t.calMin?(n.textContent="吃得太少",n.classList.add("over"),s("#d-chip-sub").textContent=`至少再吃 ${t.calMin-e} kcal，别低于下限`):i<0?(n.textContent=`超 ${-i}`,n.classList.add("over"),s("#d-chip-sub").textContent="明天主食减半就能找回来"):(n.textContent="正常",n.classList.remove("over"),s("#d-chip-sub").textContent=`还可吃 ${i} kcal`);const o=Math.min(100,Math.round(e/t.calTarget*100)),r=Math.round(t.calMin/t.calTarget*100),u=s("#d-bar-fill");u.style.width=o+"%",u.classList.toggle("over",e>t.calTarget),u.classList.toggle("low",e<t.calMin),s("#d-bar-min").style.left=r+"%",R(),Ot()}function Ot(){if(!a)return;const t=s("#meal-log");t.innerHTML="";const e=gt();e.length||(t.innerHTML='<li class="log-empty">今天还没记录，吃完顺手记一下</li>'),e.forEach(i=>{const n=document.createElement("li");n.innerHTML=`
      ${i.photo?`<img class="ml-photo" src="${i.photo}" alt="餐食照片">`:""}
      <div class="ml-main">
        <span class="ml-tag">${et[i.time]||"餐"}</span>
        <span class="ml-food">${w(i.food||"未填写")}</span>
      </div>
      <b class="ml-cal">${i.cal} kcal</b>
      <button class="wl-del" aria-label="删除这条饮食记录">删</button>`,n.querySelector(".wl-del").addEventListener("click",()=>{a.meals=a.meals.filter(o=>o!==i),f(),z(),U()}),t.appendChild(n)})}function xt(t,e,i,n){a&&(a.meals.push({d:h(),time:t,food:e,cal:Math.round(i),ts:Date.now(),photo:O||void 0,comboId:n}),n&&(a.picks[n]=(a.picks[n]||0)+1),yt(),f(),z(),U())}function yt(){O=null,s("#photo-preview-row").classList.add("hidden"),s("#photo-preview").removeAttribute("src")}function Pt(){const t=parseFloat(s("#meal-cal").value),e=s("#meal-food").value.trim();if(!isFinite(t)||t<=0){p("先估一下这餐的热量");return}if(t>3e3){p("单餐超过 3000 kcal，是不是多打了一个 0");return}if(!e){p("写一下吃了什么，或用上面的推荐搭配");return}xt(T,e,t),s("#meal-food").value="",s("#meal-cal").value="",p("已记录这一餐")}function ct(t){const e=new FileReader;e.onload=()=>{const i=new Image;i.onload=()=>{const o=Math.min(1,480/Math.max(i.width,i.height)),r=document.createElement("canvas");r.width=Math.round(i.width*o),r.height=Math.round(i.height*o),r.getContext("2d").drawImage(i,0,0,r.width,r.height),O=r.toDataURL("image/jpeg",.55);const u=s("#photo-preview");u.src=O,s("#photo-preview-row").classList.remove("hidden"),p("照片已添加，可点 AI 识别热量")},i.src=String(e.result)},e.readAsDataURL(t)}const G={base:"https://dashscope.aliyuncs.com/compatible-mode/v1",key:"",model:"qwen-vl-plus"};function Lt(){try{const t=localStorage.getItem("fz_ai");if(t)return{...G,...JSON.parse(t)}}catch{}return{...G}}function Nt(t){localStorage.setItem("fz_ai",JSON.stringify(t))}const _t='你是营养师。仔细看这张餐食照片，识别其中的每种食物，按常见分量估算总热量（千卡，取平均值即可）。只输出一个 JSON 对象：{"food":"食物清单，顿号分隔，含大致分量","cal":总热量数字}，不要输出任何其他文字。';async function qt(){const t=Lt();if(!t.key){Mt(),p("先在设置里填入 AI Key（百炼有免费额度）");return}if(!O){p("先拍一张或从相册选一张照片");return}const e=s("#ai-btn");e.disabled=!0,e.textContent="识别中…";try{const i=await fetch(t.base.replace(/\/+$/,"")+"/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.key},body:JSON.stringify({model:t.model,messages:[{role:"user",content:[{type:"image_url",image_url:{url:O}},{type:"text",text:_t}]}]})});if(!i.ok)throw new Error("HTTP "+i.status);const n=await i.json(),r=(n.choices&&n.choices[0]&&n.choices[0].message&&n.choices[0].message.content||"").match(/\{[\s\S]*\}/);if(!r)throw new Error("返回格式不对");const u=JSON.parse(r[0]),c=Math.round(Number(u.cal)),m=String(u.food??"").trim();if(!isFinite(c)||c<=0||c>5e3)throw new Error("热量数值异常");if(!m)throw new Error("未识别到食物");s("#meal-food").value=m,s("#meal-cal").value=String(c),p("AI 识别完成，核对后点「记入」")}catch(i){p("AI 识别失败："+(i instanceof Error?i.message:"网络错误")+"，可手动填写")}finally{e.disabled=!1,e.textContent="AI 识别热量"}}const dt={home:{fatburn:[{name:"开合跳",met:8,min:15},{name:"波比跳",met:8,min:10},{name:"高抬腿",met:5,min:15},{name:"跳绳",met:11,min:15}],shape:[{name:"深蹲",met:5,min:15},{name:"俯卧撑",met:3.8,min:10},{name:"臀桥",met:3,min:15},{name:"平板支撑",met:3,min:10}],fitness:[{name:"HIIT 跟练",met:8,min:20},{name:"登山跑",met:8,min:15},{name:"波比跳",met:8,min:12},{name:"全身循环",met:6,min:25}]},outdoor:{fatburn:[{name:"快走",met:3.5,min:40},{name:"慢跑",met:7,min:30},{name:"骑行",met:6,min:40}],shape:[{name:"爬楼梯",met:8,min:20},{name:"徒手循环训练",met:6,min:25}],fitness:[{name:"跑步间歇",met:9,min:25},{name:"爬山",met:6,min:90},{name:"跳绳",met:11,min:15}]},gym:{fatburn:[{name:"跑步机慢跑",met:7,min:30},{name:"椭圆机",met:5,min:30},{name:"动感单车",met:7,min:30}],shape:[{name:"力量训练",met:5,min:45},{name:"哑铃循环",met:5,min:30}],fitness:[{name:"战绳",met:10,min:15},{name:"划船机",met:7,min:20},{name:"跑步机变速",met:9,min:25}]}},zt={home:"居家",outdoor:"户外",gym:"健身房"},Kt={fatburn:"减脂",shape:"塑形",fitness:"体能"};let W="home",Q="fatburn";function F(t,e){const i=a?B(a).w:70;return Math.round(t*i*(e/60))}function A(){if(!a)return;const t=dt[W]&&dt[W][Q]||[],e=s("#rec-list");e.innerHTML="",s(".sport-hero .sp-title").textContent=`${zt[W]} · ${Kt[Q]}推荐`,t.forEach(c=>{const m=document.createElement("button");m.className="rec-item",m.innerHTML=`
      <div class="rec-main">
        <div class="rec-name">${w(c.name)}</div>
        <div class="rec-sub">约 ${c.min} 分钟 · 预计消耗 ${F(c.met,c.min)} kcal</div>
      </div>
      <span class="rec-go">打卡</span>`,m.addEventListener("click",()=>{a.sports.push({d:h(),name:c.name,min:c.min,ts:Date.now(),kcal:F(c.met,c.min)}),f(),A(),p(`${c.name} 打卡成功`)}),e.appendChild(m)});const i=k(h(),!1),n=!!(i&&i.train&&i.train.walk),o=!!(i&&i.train&&i.train.strength);s("#tt-walk-state").textContent=n?"已打卡":"",s("#tt-str-state").textContent=o?"已打卡":"",s("#tt-walk").classList.toggle("done",n),s("#tt-strength").classList.toggle("done",o);const r=s("#sport-log");r.innerHTML="";const u=[];n&&u.push({name:"快走",min:30,kcal:F(3.5,30),builtin:!0}),o&&u.push({name:"居家力量",min:25,kcal:F(5,25),builtin:!0}),a.sports.filter(c=>c.d===h()).forEach(c=>u.push({name:c.name,min:c.min,kcal:c.kcal,ref:c,builtin:!1})),u.length||(r.innerHTML='<li class="log-empty">今天还没动，从 25 分钟开始就算数</li>'),u.forEach(c=>{const m=document.createElement("li");m.innerHTML=`
      <div class="ml-main"><span class="ml-tag">${c.builtin?"计划内":"打卡"}</span><span class="ml-food">${w(c.name)}</span></div>
      <b class="ml-cal">${c.min} 分钟${c.kcal?` · ${c.kcal} kcal`:""}</b>
      ${c.builtin?"":'<button class="wl-del" aria-label="删除这条运动记录">删</button>'}`,c.builtin||m.querySelector(".wl-del").addEventListener("click",()=>{a.sports=a.sports.filter(L=>L!==c.ref),f(),A(),M()}),r.appendChild(m)})}function ut(t){const e=k(h(),!0);e.train[t]=!e.train[t],f(),A(),M()}function Rt(){if(!a)return;const t=s("#sport-name").value.trim(),e=parseFloat(s("#sport-min").value);if(!t){p("写一下运动名称");return}if(!isFinite(e)||e<1){p("填一下分钟数");return}a.sports.push({d:h(),name:t,min:Math.round(e),ts:Date.now(),kcal:F(6,e)}),s("#sport-name").value="",s("#sport-min").value="",f(),A(),p("运动打卡成功")}function Y(t){if(!a)return 0;const e=a.weights[0],i=Math.max(0,(y(t).getTime()-y(e.d).getTime())/St);return Math.max(a.target,e.w-jt*i)}function B(t){return t.weights[t.weights.length-1]}function st(){const t=B(a);return t.w-Y(t.d)}const Wt=["主食每餐减半：米饭、面条都减一半（自动加入打卡）","快走加到 4 次，每次 40 分钟","本周含糖饮料、蛋糕、油炸零食清零","晚餐外卖换成轻食或麻辣烫（不喝汤）","23:30 前上床，睡够 7 小时"];function D(){if(!a)return;const t=B(a),e=st(),i=e>.8;s("#w-latest").textContent=t.w.toFixed(1);const n=s("#w-diff-chip");i?(n.textContent=`高 ${e.toFixed(1)} kg`,n.classList.add("over")):e<=-.15?(n.textContent=`低 ${Math.abs(e).toFixed(1)} kg`,n.classList.remove("over")):(n.textContent="贴线",n.classList.remove("over")),s("#weight-hero").classList.toggle("over",i),s("#w-start").textContent=a.weights[0].w.toFixed(1),s("#w-expected").textContent=Y(h()).toFixed(1),s("#w-target").textContent=a.target.toFixed(1),Jt(),Gt(),Yt();const o=h();a.adjust.on&&a.adjust.until&&o>a.adjust.until&&(a.adjust.on=!1,f(),p("纠偏周期结束，称个体重看看效果"));const r=s("#adjust-card"),u=s("#adjust-active");if(a.adjust.on){r.classList.add("hidden"),u.classList.remove("hidden");const c=a.adjust.until?Math.max(0,Math.ceil((y(a.adjust.until).getTime()-y(o).getTime())/864e5)):0;s("#aa-days").textContent=String(c),s("#aa-text").textContent="主食每餐减半已加入每日打卡。按清单执行一周，称重回到标准线后可提前结束。"}else if(i){u.classList.add("hidden"),r.classList.remove("hidden"),s("#adj-title").textContent=`超出标准线 ${e.toFixed(1)} kg`,s("#adj-sub").textContent="一周没控住很正常，7 天纠偏就能拉回来。下面是能立刻做的事：";const c=s("#adjust-body");c.innerHTML=`<ul class="adj-list">${Wt.map(m=>`<li>${w(m)}</li>`).join("")}</ul><button class="adj-btn" id="adj-start">开启 7 天纠偏模式</button>`,c.querySelector("#adj-start").addEventListener("click",()=>{a.adjust={on:!0,until:J(h(),7)},f(),D(),M(),p("纠偏模式开启，主食减半已加入打卡")})}else r.classList.add("hidden"),u.classList.add("hidden")}function Jt(){if(!a)return;const t=s("#chart-box"),e=s("#chart-empty"),i=a.weights;if(i.length<2){t.innerHTML="",e.classList.remove("hidden");return}e.classList.add("hidden");const n=320,o=150,r=14,u=st()>.8,c=i.map(v=>Y(v.d)),m=i.map(v=>v.w).concat(c),L=Math.min(...m)-.6,x=Math.max(...m)+.6,S=v=>r+v/(i.length-1)*(n-2*r),$=v=>r+(1-(v-L)/(x-L))*(o-2*r),l=(v,P)=>v.map((X,C)=>`${S(C).toFixed(1)},${P(X).toFixed(1)}`).join(" "),d=i.map((v,P)=>`<circle cx="${S(P).toFixed(1)}" cy="${$(v.w).toFixed(1)}" r="3.4" fill="#fff" stroke="#1F6E52" stroke-width="2"/>`).join(""),g=y(i[0].d),I=y(i[i.length-1].d);t.innerHTML=`
  <svg viewBox="0 0 ${n} ${o+16}" role="img" aria-label="体重趋势图">
    <polyline points="${l(c,$)}" fill="none" stroke="${u?"#E8A33D":"#A9C6B4"}" stroke-width="2" stroke-dasharray="5 4" stroke-linecap="round"/>
    <polyline points="${l(i.map(v=>v.w),$)}" fill="none" stroke="#1F6E52" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    ${d}
    <text x="${r}" y="${o+12}" font-size="10" fill="#8FA096">${g.getMonth()+1}/${g.getDate()}</text>
    <text x="${n-r}" y="${o+12}" font-size="10" fill="#8FA096" text-anchor="end">${I.getMonth()+1}/${I.getDate()}</text>
  </svg>`}function Gt(){if(!a)return;const t=a.weights,e=s("#weight-log");e.innerHTML="",t.slice(-10).reverse().forEach(i=>{const n=document.createElement("li"),o=i.w-Y(i.d)>.8,r=y(i.d);n.innerHTML=`
      <span class="wl-date">${r.getMonth()+1} 月 ${r.getDate()} 日</span>
      <span class="wl-val${o?" over":""}">${i.w.toFixed(1)} kg${i.waist?` · 腰围 ${i.waist}cm`:""}</span>
      <button class="wl-del" aria-label="删除这条记录">删除</button>`,n.querySelector(".wl-del").addEventListener("click",()=>{if(t.length<=1){p("至少保留一条体重记录");return}a.weights=t.filter(u=>u!==i),f(),D(),p("已删除")}),e.appendChild(n)})}function pt(){if(!a)return;const t=parseFloat(s("#w-input").value),e=parseFloat(s("#waist-input").value);if(!isFinite(t)||t<30||t>200){p("请输入 30–200 之间的体重");return}const i=h(),n=a.weights.find(o=>o.d===i);if(n?(n.w=t,isFinite(e)&&e>30&&(n.waist=e),p("已更新今天的体重")):(a.weights.push({d:i,w:t,waist:isFinite(e)&&e>30?e:null}),a.weights.sort((o,r)=>o.d<r.d?-1:1),p("已记录")),s("#w-input").value="",s("#waist-input").value="",a.adjust.on&&st()<=.8){a.adjust={on:!1,until:null},f(),D(),M(),p("已回到标准线，纠偏完成");return}f(),D()}function Ut(){let t=q(h())>=.8?1:0,e=J(h(),-1);for(;q(e)>=.8;)t++,e=J(e,-1);return t}function Yt(){if(!a)return;s("#st-streak").textContent=String(Ut());const t=_(h()).filter(l=>l<=h()),e=Math.round(t.reduce((l,d)=>l+q(d),0)/(t.length||1)*100);s("#st-week-rate").textContent=e+"%";const i=B(a).w-a.weights[0].w;s("#st-kg").textContent=(i>0?"+":"")+i.toFixed(1);const n=a.meals.filter(l=>t.includes(l.d)),o=n.reduce((l,d)=>l+d.cal,0),r=new Set(n.map(l=>l.d)).size||1;s("#ov-meals").textContent=`记录 ${n.length} 餐 · 共 ${o} kcal · 日均约 ${Math.round(o/r)} kcal`;const u=t.filter(l=>{const d=k(l,!1);return d&&d.train&&(d.train.walk||d.train.strength)}),c=a.sports.filter(l=>t.includes(l.d)),m=c.reduce((l,d)=>l+d.min,0)+u.reduce((l,d)=>{const g=k(d,!1);return l+(g.train.walk?30:0)+(g.train.strength?25:0)},0),L=c.reduce((l,d)=>l+(d.kcal||F(6,d.min)),0)+u.reduce((l,d)=>{const g=k(d,!1);return l+(g.train.walk?F(3.5,30):0)+(g.train.strength?F(5,25):0)},0);s("#ov-sports").textContent=`打卡 ${c.length+u.reduce((l,d)=>{const g=k(d,!1);return l+(g.train.walk?1:0)+(g.train.strength?1:0)},0)} 次 · 共 ${m} 分钟 · 约消耗 ${Math.round(L)} kcal`;const x=vt.map(l=>{const d=Math.round(t.reduce((g,I)=>{const v=k(I,!1);return g+N(v,l)},0)/(t.length||1)*100);return{tk:l,pct:d}}).sort((l,d)=>l.pct-d.pct),S=s("#rule-list");S.innerHTML="",x.forEach(({tk:l,pct:d})=>{const g=document.createElement("li");g.innerHTML=`
      <div class="rule-row-top"><span class="rule-name">${w(l.label)}</span><span class="rule-pct">${d}%</span></div>
      <div class="rule-bar"><div class="rule-bar-fill${d<60?" weak":""}" style="width:${d}%"></div></div>`,S.appendChild(g)});const $=x[0];s("#rule-tip").textContent=$.pct>=100?"本周全部规则都做到了，稳定输出中":`「${$.tk.label}」完成最少。周日复盘时只商量怎么改这一件事`}function Mt(){if(!a)return;const t=a.profile;s("#st-sex").value=t.sex,s("#st-age").value=String(t.age),s("#st-height").value=String(t.height),s("#st-target").value=String(a.target),s("#st-speed").value=String(t.speed),s("#st-result").textContent=`每日目标 ${t.calTarget} kcal · 安全下限 ${t.calMin} kcal`;const e=Lt();s("#ai-key").value=e.key,s("#ai-base").value=e.base,s("#ai-model").value=e.model,s("#settings-mask").classList.remove("hidden")}function Ct(){const t=s("#st-sex").value,e=parseInt(s("#st-age").value,10),i=parseFloat(s("#st-height").value),n=parseFloat(s("#st-speed").value);return!isFinite(e)||e<12||e>90?(p("年龄填 12–90"),null):!isFinite(i)||i<130||i>220?(p("身高填 130–220 cm"),null):!isFinite(n)||n<.1||n>1?(p("减脂速度建议 0.3–0.7"),null):{sex:t,age:e,height:i,speed:n}}function Xt(){if(!a)return;const t=Ct();if(!t)return;const e=H(t,B(a).w);s("#st-result").textContent=`每日目标 ${e.calTarget} kcal · 安全下限 ${e.calMin} kcal`}function Vt(){M(),U(),z(),A(),D()}function mt(t){E(".tab").forEach(e=>e.classList.toggle("active",e.dataset.page===t)),["today","diet","sport","record"].forEach(e=>s("#page-"+e).classList.toggle("hidden",e!==t)),t==="diet"&&z(),t==="sport"&&A(),t==="record"&&D()}function Qt(){E(".tab").forEach(t=>{t.addEventListener("click",()=>mt(t.dataset.page||"today"))}),s("#fm-btn").addEventListener("click",()=>{const t=k(b,!0);if(t.free){t.free=!1,f(),M(),p("已取消自由餐");return}if(_(b).some(i=>i!==b&&(()=>{const n=k(i,!1);return n&&n.free})())){p("本周的自由餐已经用过了");return}t.free=!0,f(),M(),p("自由餐已启用，好好享受这顿")}),s("#w-save").addEventListener("click",pt),s("#w-input").addEventListener("keydown",t=>{t.key==="Enter"&&pt()}),s("#photo-btn").addEventListener("click",()=>s("#photo-input").click()),s("#album-btn").addEventListener("click",()=>s("#album-input").click()),s("#photo-input").addEventListener("change",t=>{const e=t.target.files?.[0];e&&ct(e),t.target.value=""}),s("#album-input").addEventListener("change",t=>{const e=t.target.files?.[0];e&&ct(e),t.target.value=""}),s("#photo-del").addEventListener("click",()=>{yt(),p("已删除照片")}),s("#ai-btn").addEventListener("click",()=>{qt()}),E("#meal-time-chips .chip").forEach(t=>{t.addEventListener("click",()=>{T=t.dataset.time||"lunch",K=0,E("#meal-time-chips .chip").forEach(e=>e.classList.toggle("active",e===t)),R()})}),s("#combo-next").addEventListener("click",()=>{K=(K+1)%Math.max(1,wt(T).length),R()}),s("#combo-pick").addEventListener("click",()=>{const t=kt();!t||!a||(xt(T,`${t.name}：${t.items}`,t.cal,t.id),R(),p(`已记录${et[T]}：${t.name}（${t.cal} kcal）`))}),s("#meal-save").addEventListener("click",Pt),s("#cal-card").addEventListener("click",()=>mt("diet")),E("#scene-chips .chip").forEach(t=>{t.addEventListener("click",()=>{W=t.dataset.scene||"home",E("#scene-chips .chip").forEach(e=>e.classList.toggle("active",e===t)),A()})}),E("#goal-chips .chip").forEach(t=>{t.addEventListener("click",()=>{Q=t.dataset.goal||"fatburn",E("#goal-chips .chip").forEach(e=>e.classList.toggle("active",e===t)),A()})}),s("#tt-walk").addEventListener("click",()=>ut("walk")),s("#tt-strength").addEventListener("click",()=>ut("strength")),s("#sport-save").addEventListener("click",Rt),s("#btn-reset").addEventListener("click",Mt),s("#st-close").addEventListener("click",()=>s("#settings-mask").classList.add("hidden")),s("#settings-mask").addEventListener("click",t=>{t.target===t.currentTarget&&s("#settings-mask").classList.add("hidden")}),s("#st-calc").addEventListener("click",Xt),s("#st-save").addEventListener("click",()=>{if(!a)return;const t=Ct();if(!t)return;const e=parseFloat(s("#st-target").value);isFinite(e)&&e>=30&&e<=200&&(a.target=e);const i=H(t,B(a).w);a.profile={...t,...i},f(),U(),z(),D(),s("#settings-mask").classList.add("hidden"),p("设置已保存，热量目标已更新")}),s("#st-ai-save").addEventListener("click",()=>{const t={key:s("#ai-key").value.trim(),base:s("#ai-base").value.trim()||G.base,model:s("#ai-model").value.trim()||G.model};Nt(t),p(t.key?"AI 配置已保存":"AI Key 已清空")}),s("#st-clear").addEventListener("click",()=>{confirm("清空全部打卡、饮食、运动、体重与设置数据？此操作无法撤销")&&(localStorage.removeItem(Z),location.reload())}),s("#aa-close").addEventListener("click",()=>{a&&(a.adjust={on:!1,until:null},f(),D(),M(),p("纠偏模式已结束"))})}function Zt(){const t=document.getElementById("root");if(!t)throw new Error("Missing #root element");t.innerHTML=$t,a=Dt(),Ht(),Qt(),a?ft():s("#setup").classList.remove("hidden"),"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}Zt();
