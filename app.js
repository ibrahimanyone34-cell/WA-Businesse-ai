const SUPABASE_URL = "https://wkqscmrgovpligtufhcj.supabase.co";
const SUPABASE_KEY = "sb_publishable_2Je1fHUz6AF8WS6IKNcrpg_bPBi8FPc";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


// =====================
// SIGN UP
// =====================

async function signup() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!email || !password) {
    message.textContent = "Please enter email and password.";
    return;
  }

  message.textContent = "Creating account...";

  const { data, error } =
    await supabaseClient.auth.signUp({
      email: email,
      password: password
    });

  if (error) {

    message.textContent = error.message;

    return;
  }

  message.textContent =
    "Account created successfully! 🎉";

}


// =====================
// LOGIN
// =====================

async function login() {

  const email =
    document.getElementById("loginEmail").value;

  const password =
    document.getElementById("loginPassword").value;

  const message =
    document.getElementById("message");

  if (!email || !password) {

    message.textContent =
      "Please enter email and password.";

    return;
  }

  message.textContent = "Logging in...";

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

  if (error) {

    message.textContent =
      error.message;

    return;
  }

  message.textContent =
    "Login successful! 🚀";

  console.log("User:", data.user);

}


// =====================
// SWITCH TO LOGIN
// =====================

function showLogin() {

  document.getElementById("signupForm")
    .style.display = "none";

  document.getElementById("loginForm")
    .style.display = "block";

}


// =====================
// SWITCH TO SIGNUP
// =====================

function showSignup() {

  document.getElementById("loginForm")
    .style.display = "none";

  document.getElementById("signupForm")
    .style.display = "block";

}
