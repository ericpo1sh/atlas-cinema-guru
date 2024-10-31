import SignInButton from "@/components/SignInButton";
import AtlasLogo from "@/assets/logo.png";


const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: '#e9e9e9'}}>
      <div className="flex-col flex bg-white w-96 h-52 items-center rounded-3xl justify-center gap-5">
        <img className="w-36" src="https://camo.githubusercontent.com/8bc14d590a928c7a86c787be19aa2b75b57636d13f246572e384d2e0cb52f87d/68747470733a2f2f6173736574732d676c6f62616c2e776562736974652d66696c65732e636f6d2f3635373166343832366539333633333433626364326163642f3635386333333331353333343561613738383639663062335f6c6f676f2d61746c61732d7363686f6f6c2d626c75652d6c696768746e696e672d6275672e737667"></img>
        <SignInButton/>
      </div>
    </div>
  );
};

export default LoginPage;
