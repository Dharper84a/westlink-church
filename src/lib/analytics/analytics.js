export class GTM {
    static layer() {
        if(!window) return false;
        window.dataLayer = window.dataLayer || []
        return true;
    }
    static push(...args) {
        if(args.length == 0) return;

        const [event, data] = args[0];

        if(this.layer()) window.dataLayer.push({
            event: event,
            ...data
        });   
    }
}
export class Analytics {
    static pushDataLayer(...args) {
        GTM.push(args);
    }
}

export default Analytics;

{/* <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YVBLEY7PJX');
</script> */}