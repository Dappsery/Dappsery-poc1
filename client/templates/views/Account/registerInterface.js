registerInterface = (function () {

    var errorExists = false;

    function resetForm()
    {
        $('#create-username').parent().removeClass('error');
        $('#create-password').parent().removeClass('error');
        $('#create-password2').parent().removeClass('error');
        $('#create-business-name').parent().removeClass('error');
        $('#registerMessage').html('');
        $('#registerMessageBox').removeClass('negative');
        errorExists = false;
    }

    function validateForm()
    {
        if (usernameIsEmpty()) {

            $('#create-username').parent().addClass('error');
            errorExists = true;

        }

        if (businessIsEmpty()) {

            $('#create-business-name').parent().addClass('error');
            errorExists = true;

        }

        if (passwordIsEmpty()) {

            $('#create-password').parent().addClass('error');
            $('#create-password2').parent().addClass('error');
            errorExists = true;

        }

        if (passwordsMatch() === false) {

            showPasswordMismatchError();
            errorExists = true;

        }
    }

    function errorsExist()
    {
        return errorExists;
    }

    function showError(error)
    {
        $('#registerMessage').html(error);
        $('#registerMessageBox').addClass('negative');
    }

    function showRegistrationComplete()
    {
        $('#registerMessage').html('Your registration is complete. Check back later.');
        $('#registerMessageBox').addClass('olive');
        $('#registrationForm').addClass('disabled');
        $('#create-submit').attr('disabled', 'true');
    }

    /* PRIVATES */

    function usernameIsEmpty()
    {
        return $('#create-username').val() === '';
    }

    function businessIsEmpty()
    {
        return $('#create-business-name').val() === '';
    }

    function passwordIsEmpty()
    {
        return $('#create-password').val() === '' || $('#create-password2').val() === '';
    }

    function passwordsMatch()
    {
        return $('#create-password').val() === $('#create-password2').val();
    }

    function showPasswordMismatchError()
    {
        $('#create-password').parent().addClass('error');
        $('#create-password2').parent().addClass('error');
        showError('Make sure your passwords match.');
    }

    return {
        resetForm:resetForm,
        validateForm:validateForm,
        errorsExist:errorsExist,
        showError:showError,
        showRegistrationComplete:showRegistrationComplete
    };
})();
