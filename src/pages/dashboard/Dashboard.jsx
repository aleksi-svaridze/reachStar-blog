import { NavLink, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { useWindowSize } from "@uidotdev/usehooks";
import RenderMainPage from '../../components/render/RenderMain';
import RenderAddArticle from "../../components/render/RenderAdd";
import RenderEditArticle from "../../components/render/RenderEdit";
import RenderDeleteArticle from "../../components/render/RenderDelete";

const Dashboard = () => {
    const {width} = useWindowSize();
    let {actionsId} = useParams();


    let render = '';

    if(actionsId === 'delete' ) {
        render = <RenderDeleteArticle />;
    } else if (actionsId === 'add') {
        render = <RenderAddArticle />;
    } else if(actionsId === 'edit') {
        render = <RenderEditArticle />;
    } else {
        render = <RenderMainPage />
    }

    return(
        <div className="mt-[64px] lg:mt-[100px]">
            <div className="container mx-auto px-5">
                <h1 className="py-[50px] text-blue-500 leading-10 md:leading-[60px] lg:leading-[68px] text-[31px] md:text-5xl lg:text-[56px] font-bold font-roboto">Dashboard</h1>

                <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 lg:gap-x-10 pb-28">
                    <div className="grid col-span-2 md:col-span-4 lg:col-span-3 p-2">
                        <nav className="flex flex-col gap-y-3">
                            <NavLink to={`/dashboard`} className={`${(isActive) => isActive ? 'text-red-500' : 'text-blue-500'} md:border-b pb-2`}>
                                    {width >= 768 ? (<span className="flex items-center gap-x-2"><ion-icon name="home-outline" size='small'></ion-icon>Main page</span>) : <ion-icon name="home-outline" size='large'></ion-icon> }
                            </NavLink>
                            <NavLink to={`/dashboard/add`} className={`${(isActive) => isActive ? 'text-red-500' : 'text-blue-500'} md:border-b py-2`}>
                                {width >= 768 ? (<span className="flex items-center gap-x-2"><ion-icon name="add-circle-outline" size='small'></ion-icon>სიახლის დამატება</span>) : <ion-icon name="add-circle-outline" size='large'></ion-icon> }
                            </NavLink>
                            <NavLink to='/dashboard/edit' className={`${(isActive) => isActive ? 'text-red-500' : 'text-blue-500'} md:border-b py-2`}>
                                {width >= 768 ? (<span className="flex items-center gap-x-2"><ion-icon name="create-outline" size='small'></ion-icon>სიახლის რედაქტირება</span>) : <ion-icon name="create-outline" size='large'></ion-icon>}
                            </NavLink>
                            <NavLink to='/dashboard/delete' className={`${(isActive) => isActive ? 'text-red-500' : 'text-blue-500'} md:border-b py-2`}>
                                {width >= 768 ? (<span className="flex items-center gap-x-2"><ion-icon name="trash-outline" size='small'></ion-icon>სიახლის წაშლა</span>) : <ion-icon name="trash-outline" size='large'></ion-icon>}
                            </NavLink>
                        </nav>
                    </div>
                    <div className="grid gap-y-5 col-span-9 md:col-span-8 lg:col-span-9 p-2">
                        {render}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;