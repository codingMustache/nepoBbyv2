<script>
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
  	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  let name = ''
  let result = ''
  let celeb = ''
  let vis = false
  let out = ''
  let msg = ''
  async function add() {
    const response = await fetch('/', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {'content-type': 'application/json'}
    });
    result = await response.json();
    check()
  }
  const check = () =>{
    celeb = name.split(' ').map(e=> e[0].toUpperCase() + e.slice(1).toLowerCase()).join(' ')
    name= ''
    result ? (
      msg = `Yeah, ${celeb} is a Nepo baby`,
      out = 'red'
    ) : (
      out = 'green',
      msg = `${celeb} isn\'t a Nepo baby`
    )
    vis = true
    setTimeout(()=> vis=false, 3000)
  }
  const handleHide = () => vis = false

</script>

{#if vis}
<div
  transition:fly="{{duration: 1000,  y: -100, easing: quintOut}}"
  style='background-color: {out}' class="response">
  <p>{msg}</p>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svg on:click={handleHide} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
</div>
{/if}

<div class="dialog">
  <h1>NepoBby</h1>
  <p>Check if a celebrity is a product of Nepotism</p>
  <form>
    <input type="text" bind:value={name}>
    <button on:click={add}>Check</button>
  </form>
</div>

<div class='footer'>
  <a href="https://github.com/codingMustache" target="_blank">
    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="#ffffff" stroke-width="1" fill="#ffffff" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
  </a>
  <a href="https://www.codingmustache.dev/" target="_blank">
    <svg viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear" clip-path="url(#clip0_1_1825)"> <g id="web"> <path id="vector" d="M7.8 12L7.05 12L7.8 12ZM16.2 12H16.95H16.2ZM12 16.2V16.95V16.2ZM14.1729 22.2749L14.3273 23.0088L14.1729 22.2749ZM9.82712 22.2749L9.67269 23.0088L9.82712 22.2749ZM2.27554 8.03225L1.58122 7.74867H1.58122L2.27554 8.03225ZM1.7251 14.1729L0.991173 14.3273L1.7251 14.1729ZM9.82712 1.7251L9.67269 0.991173L9.82712 1.7251ZM14.1729 1.7251L14.3273 0.991174L14.1729 1.7251ZM21.6399 8.07014L21.8576 8.78785L21.6399 8.07014ZM2.35887 8.06976L2.14116 8.78747L2.35887 8.06976ZM21.0312 8.3185C21.4944 9.45344 21.75 10.6959 21.75 12H23.25C23.25 10.4983 22.9553 9.06352 22.42 7.75174L21.0312 8.3185ZM21.75 12C21.75 12.6927 21.6779 13.3678 21.541 14.0184L23.0088 14.3273C23.167 13.5757 23.25 12.7972 23.25 12H21.75ZM21.541 14.0184C20.7489 17.7827 17.7828 20.7489 14.0184 21.541L14.3273 23.0088C18.6735 22.0943 22.0943 18.6735 23.0088 14.3273L21.541 14.0184ZM14.0184 21.541C13.3678 21.6779 12.6927 21.75 12 21.75V23.25C12.7972 23.25 13.5757 23.167 14.3273 23.0088L14.0184 21.541ZM12 21.75C11.3072 21.75 10.6322 21.6779 9.98156 21.541L9.67269 23.0088C10.4242 23.167 11.2028 23.25 12 23.25V21.75ZM2.25 12C2.25 10.6949 2.50601 9.45149 2.96986 8.31584L1.58122 7.74867C1.0451 9.06127 0.75 10.4971 0.75 12H2.25ZM9.98156 21.541C6.21724 20.7489 3.25112 17.7827 2.45903 14.0184L0.991173 14.3273C1.90571 18.6735 5.32647 22.0943 9.67269 23.0088L9.98156 21.541ZM2.45903 14.0184C2.32213 13.3678 2.25 12.6927 2.25 12H0.75C0.75 12.7972 0.83303 13.5757 0.991173 14.3273L2.45903 14.0184ZM2.96986 8.31584C4.17707 5.36016 6.79381 3.1298 9.98155 2.45903L9.67269 0.991173C5.99032 1.76602 2.97369 4.33941 1.58122 7.74867L2.96986 8.31584ZM9.98155 2.45903C10.6322 2.32213 11.3072 2.25 12 2.25V0.75C11.2028 0.75 10.4242 0.83303 9.67269 0.991173L9.98155 2.45903ZM12 2.25C12.6927 2.25 13.3678 2.32213 14.0184 2.45903L14.3273 0.991174C13.5757 0.833031 12.7972 0.75 12 0.75V2.25ZM14.0184 2.45903C17.2071 3.13 19.8245 5.3615 21.0312 8.3185L22.42 7.75174C21.0281 4.34096 18.0108 1.76625 14.3273 0.991174L14.0184 2.45903ZM13.4584 1.95309C13.7482 2.8614 14.8215 6.35621 15.2615 9.5682L16.7476 9.36461C16.289 6.01664 15.1813 2.41835 14.8874 1.49712L13.4584 1.95309ZM15.2615 9.5682C15.3795 10.4292 15.45 11.2568 15.45 12L16.95 12C16.95 11.1681 16.8715 10.269 16.7476 9.36461L15.2615 9.5682ZM21.4222 7.35242C20.2692 7.70212 18.1033 8.3164 15.8685 8.72886L16.1407 10.204C18.4546 9.7769 20.6809 9.14473 21.8576 8.78785L21.4222 7.35242ZM15.8685 8.72886C14.5129 8.97904 13.1579 9.15 12 9.15L12 10.65C13.2874 10.65 14.743 10.4619 16.1407 10.204L15.8685 8.72886ZM15.45 12C15.45 13.1009 15.2954 14.3808 15.0647 15.671L16.5413 15.935C16.7797 14.6019 16.95 13.2252 16.95 12L15.45 12ZM15.0647 15.671C14.5591 18.4992 13.7097 21.2593 13.4584 22.0469L14.8874 22.5029C15.145 21.6956 16.0181 18.8613 16.5413 15.935L15.0647 15.671ZM22.0469 13.4584C21.2593 13.7097 18.4992 14.5591 15.671 15.0647L15.935 16.5413C18.8613 16.0181 21.6956 15.145 22.5029 14.8874L22.0469 13.4584ZM15.671 15.0647C14.3808 15.2954 13.1009 15.45 12 15.45L12 16.95C13.2252 16.95 14.6019 16.7797 15.935 16.5413L15.671 15.0647ZM12 15.45C10.8991 15.45 9.61923 15.2954 8.32897 15.0647L8.06496 16.5413C9.39807 16.7797 10.7748 16.95 12 16.95L12 15.45ZM8.32897 15.0647C5.50076 14.5591 2.74066 13.7097 1.95309 13.4584L1.49712 14.8874C2.30437 15.145 5.13873 16.0181 8.06496 16.5413L8.32897 15.0647ZM7.05 12C7.05 13.2252 7.22032 14.6019 7.45867 15.935L8.93526 15.671C8.70456 14.3808 8.55 13.1009 8.55 12L7.05 12ZM7.45867 15.935C7.98188 18.8613 8.85504 21.6956 9.11261 22.5029L10.5416 22.0469C10.2903 21.2593 9.44094 18.4992 8.93526 15.671L7.45867 15.935ZM9.11261 1.49712C8.81867 2.41835 7.711 6.01664 7.25235 9.36461L8.73846 9.5682C9.17849 6.35621 10.2518 2.8614 10.5416 1.95309L9.11261 1.49712ZM7.25235 9.36461C7.12846 10.269 7.05 11.1681 7.05 12L8.55 12C8.55 11.2568 8.62052 10.4292 8.73846 9.5682L7.25235 9.36461ZM12 9.15C10.8421 9.15 9.4871 8.97904 8.13152 8.72886L7.85929 10.204C9.25697 10.4619 10.7126 10.65 12 10.65L12 9.15ZM8.13152 8.72886C5.89586 8.31625 3.72921 7.70168 2.57657 7.35205L2.14116 8.78747C3.3175 9.14428 5.54457 9.77675 7.85929 10.204L8.13152 8.72886ZM21.38 7.3695C21.3919 7.3633 21.4065 7.35719 21.4222 7.35242L21.8576 8.78785C21.933 8.76498 22.0039 8.73569 22.0712 8.70074L21.38 7.3695ZM1.88425 8.67209C1.96322 8.72038 2.04888 8.75948 2.14116 8.78747L2.57657 7.35205C2.60983 7.36214 2.64048 7.3763 2.66683 7.39242L1.88425 8.67209Z" fill="#ffffff"></path> </g> </g> <defs> <clipPath id="clip0_1_1825"> <rect width="24" height="24" fill="#ffffff"></rect> </clipPath> </defs> </g></svg>
  </a>
</div>

<style>
  .footer{
    display: flex;
    position: fixed;
    bottom:0px;
    right: 0px;
    height: 40px;
    width: 80px;
  }
  .footer svg{
    margin: 5px;
    height: 30px;
    width: 30px;
  }
  .response{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-shadow: 0 0 5px black;
    border-radius:0 0 10px 10px;
    position: fixed;
    width: 100%;
  }
  .response svg{
    position: fixed;
    right: 10px;
    height: 20px;
    width: 20px;
  }
  .dialog{
    background-color: #ffc300;
    padding: 20px;
    margin: auto;
    border-radius: 20px;
    color:#003566;
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 10px black,  inset 0 0 10px black;
  }
  h1{
    font-size: 5rem;
    color:#003566;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.571);
  }
  input, button{
    border: 1px solid #003566;
    background-color: #fdea88;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.669);
    transition: .5s;
    margin: 10px;
  }
  p{
    text-align: center;
  }
  button:hover{
    box-shadow: none;
    color:#fdea88;
    background-color: #003566;
  }
@media only screen and (max-width: 600px) {
  .dialog{
    padding: 20px 3px;
    width: 90%;
  }
  h1{
    font-size: 3rem;
  }
  form{
  display: flex;
  align-items: center;
  flex-direction: column;
}
}
@media only screen and (max-width: 300px) {
.dialog{
  width: 100%;
}

}
</style>
