import { Layout } from "../../components"
import { getCurrentUser } from "../../utils"

const Settings = () => {
  //pretend the following to be an api call to fetch current user
  const { name } = getCurrentUser()
  return(
    <Layout>
      <div className="text-blue-600">Hello {name.split(' ')[0]}!</div>
      Settings
    </Layout>
  )
}

export default Settings