import { useAnimatedNumber } from "../hooks/useAnimatedNumber";

function formatAnimatedValue(value, decimals, suffix) {
  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return `${formatted}${suffix}`;
}

function StatCard({ stat }) {
  const animatedValue = useAnimatedNumber(stat.value, stat.decimals);

  return (
    <article className="stat-card">
      <span>{stat.label}</span>
      <strong>{formatAnimatedValue(animatedValue, stat.decimals, stat.suffix)}</strong>
    </article>
  );
}

export default StatCard;
