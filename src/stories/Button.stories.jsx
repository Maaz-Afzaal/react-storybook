import Button from "./Button"
const handleClick=()=>{
  alert("abc")
}
export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick123" } },
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  backgroundColor: "#fa7b03",
  label: "Press Me",
  size: "md",
  color:"white",
  handleClick:handleClick()
}


export const PrimaryButtonSmall = Template.bind({})
PrimaryButtonSmall.args = {
  backgroundColor: "#fa7b03",
  label: "Press Me",
  size: "sm",
  color:"white",
}

export const PrimaryButtonLarge = Template.bind({})
PrimaryButtonLarge.args = {
  backgroundColor: "#fa7b03",
  label: "Press Me",
  size: "lg",
  color:"green"
}

