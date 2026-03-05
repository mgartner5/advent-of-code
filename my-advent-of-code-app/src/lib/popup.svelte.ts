const popupState = $state({
    show: false,
    message: ''
});

export const openPopup = (message: string) => {
    popupState.message = message;
    popupState.show = true;
};

export const closePopup = () => {
    popupState.show = false;
    popupState.message = '';
};

export { popupState };
