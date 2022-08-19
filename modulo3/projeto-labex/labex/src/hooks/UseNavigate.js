import { useNavigate} from "react-router-dom"

function useNavigate(){
    const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }
}
return(
    <div>
    </div>
)
export default useNavigate;