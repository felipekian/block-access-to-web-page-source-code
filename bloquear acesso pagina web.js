
const BloquearSiteDeUsuarioMalIntencionado = {



        bloquear_teclado: function () {



            // CTRL V v

            $(document).ready(function () {

                $(document).keydown(function (event) {

                    if (event.ctrlKey == true && (event.which == '118' || event.which == '86')) {

                        event.preventDefault();

                        return false;

                    }

                });

            });



            // CTRL C c

            $(document).ready(function () {

                $(document).keydown(function (event) {

                    if (event.ctrlKey == true && (event.which == '97' || event.which == '67')) {

                        event.preventDefault();

                        return false;

                    }

                });

            });



            // CTRL U u

            $(document).ready(function () {

                $(document).keydown(function (event) {

                    if (event.ctrlKey == true && (event.which == '85' || event.which == '117')) {

                        event.preventDefault();

                        return false;

                    }

                });

            });



            // CTRL A a

            $(document).ready(function () {

                $(document).keydown(function (event) {

                    if (event.ctrlKey == true && (event.which == '65' || event.which == '97')) {

                        event.preventDefault();

                        return false;

                    }

                });

            });



            // CTRL S s

            $(document).ready(function () {

                $(document).keydown(function (event) {

                    if (event.ctrlKey == true && (event.which == '83' || event.which == '115')) {

                        event.preventDefault();

                        return false;

                    }

                });

            });



            // CTRL X x

            $(document).ready(function () {

                $(document).keydown(function (event) {

                    if (event.ctrlKey == true && (event.which == '88' || event.which == '120')) {

                        event.preventDefault();

                        return false;

                    }

                });

            });



            // CTRL J j

            $(document).ready(function () {

                $(document).keydown(function (event) {

                    if (event.ctrlKey == true && (event.which == '74' || event.which == '106')) {

                        event.preventDefault();

                        return false;

                    }

                });

            });



            // CTRL + Shift + i I

            $(document).ready(function () {

                $(document).keydown(function (event) {

                    if (event.ctrlKey == true && event.shiftKey == true && event.which == '73') {

                        event.preventDefault();

                        return false;

                    }

                });

            });



            // F12

            $(document).ready(function () {

                $(document).keydown(function (event) {

                    if (event.which == '123') {

                        event.preventDefault();

                        return false;

                    }

                });

            });

            },



            bloquear_mouse: function () {

                // Bloquear botão direito do mouse

                $(document).bind("contextmenu", function (e) {
                    e.preventDefault();
                    return false;

                });

            }

        }





        BloquearSiteDeUsuarioMalIntencionado.bloquear_mouse();

        BloquearSiteDeUsuarioMalIntencionado.bloquear_teclado();