import Button from '../buttom/Button'
import Group from '../Group/Group'

function SighnBoard() {
  const sighns = ['/', 'x','-', '+']
  return (
    <Group elType='sighn'>
        {sighns.map((i) => <Button key={i} value={i}/> )}
    </Group>
  )
}

export default SighnBoard