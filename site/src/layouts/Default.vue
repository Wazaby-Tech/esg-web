<template>
  <div class="layout">
    <header class="header">
        <g-link to="/">
          <g-image alt="Elevated Solutions Group" src="~/assets/images/esg_logo.jpeg" width="135" />
        </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/process/">How It Works</g-link>
        <g-link class="nav__link" to="/service/">Service Areas</g-link>
        <g-link class="nav__link" to="/team/">Team</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      &copy; 2020 Elevated Solutions Group
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #848482;
}

.layout {
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 150px;
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
}

.nav__link {
  margin-left: 20px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 50px;
  border-top: solid 1px #848482;
}
</style>
