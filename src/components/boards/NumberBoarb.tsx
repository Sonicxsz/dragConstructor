import Button from "../buttom/Button"
import Group from "../Group/Group"

function NumberBoard() {
  const numbers = [1,2,3,4,5,6,7,8,9,0, ',']
  

  return (
    <Group elType={'numbers'} type="grid">
        {numbers.map((i) => <Button key={i} value={i}/> )}
    </Group>
  )
}

export default NumberBoard