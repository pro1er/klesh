import { useLocale } from 'next-intl';
import Link from '../../node_modules/next/link';
export default function LocaleSwitcher() {
    const locale = useLocale();
    return (
        <div className='flex '>
            <Link href={`/mn`} locale={'mn'} className={` font-monBlack ${locale==='mn' ? 'text-big': " text-big/40"}`}>
                MN
            </Link>
            <div className='mx-2 bg-big h-6 w-[4px]'></div>
            <Link href={`/en`} locale={"en"} className={` font-monBlack ${locale==='en' ? 'text-big': "text-big/40"}`}>
                EN
            </Link>
        </div>
    );
}