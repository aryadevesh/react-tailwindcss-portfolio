import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>	
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-5">
						<p className="font-general-medium text-lg md:text-lg text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-medium text-ternary-dark dark:text-ternary-light">  
							{category}
						</span>
					</div>
				</div>
		</motion.div>
	);
};
/////link that I have removed
/////<Link to="/projects/single-project" aria-label="Single Project">
/////</Link>
export default ProjectSingle;
