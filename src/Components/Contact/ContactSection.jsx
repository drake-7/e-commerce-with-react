import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./ContactSection.module.scss";

const ContactSection = ({ iconName, title, children }) => {
  return (
    <section className={s.section}>
      <header className={s.headerContent}>
        <div className={s.iconHolder}>
          <SvgIcon name={iconName} />
        </div>

        <b>{title}</b>
      </header>

      <div className={s.content}>{children}</div>
    </section>
  );
};
export default ContactSection;
