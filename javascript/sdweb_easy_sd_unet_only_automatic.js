onOptionsChanged(async () => {
    console.log('sdweb_easy_sd_unet_only_automatic: Remove SD Unet Options')
    window.gradio_config.components.find((component) => component.props.elem_id == 'setting_sd_unet').props.choices.splice(1, window.gradio_config.components.find((component) => component.props.elem_id == 'setting_sd_unet').props.choices.length - 2)
})
