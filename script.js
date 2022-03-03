let time = 11;
setTimeout(() => {
    document.querySelector(".data").innerHTML = "Hello";
    setTimeout(() => {
        time--;
        document.querySelector(".data").innerHTML = time;
        setTimeout(() => {
            time--;
            document.querySelector(".data").innerHTML = time;
            setTimeout(() => {
                time--;
                document.querySelector(".data").innerHTML = time;
                setTimeout(() => {
                    time--;
                    document.querySelector(".data").innerHTML = time;
                    setTimeout(() => {
                        time--;
                        document.querySelector(".data").innerHTML = time;
                        setTimeout(() => {
                            time--;
                            document.querySelector(".data").innerHTML = time;
                            setTimeout(() => {
                                time--;
                                document.querySelector(".data").innerHTML = time;
                                setTimeout(() => {
                                    time--;
                                    document.querySelector(".data").innerHTML = time;
                                    setTimeout(() => {
                                        time--;
                                        document.querySelector(".data").innerHTML = time;
                                        setTimeout(() => {
                                            time--;
                                            document.querySelector(".data").innerHTML = time;
                                        }, 1000);
                                        setTimeout(() => {
                                            document.querySelector(".data").innerHTML = "Happy Independence Day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);                            
                              }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);