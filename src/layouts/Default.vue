<template>
  <div class="Site layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/who/">Who?</g-link>
      </nav>
    </header>
    <slot class="Site-content" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>



<style >
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}

@font-face {
  font-family: Quattrocento;
  src: url("../assets/fonts/Quattrocento-Regular.ttf");
  font-weight: normal;
}
@font-face {
  font-family: Titillium;
  src: url("../assets/fonts/TitilliumWeb-Regular.ttf");
  font-weight: normal;
}
@font-face {
  font-family: FiraSans;
  src: url("../assets/fonts/FiraSans-Regular.ttf");
  font-weight: normal;
}
</style>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
