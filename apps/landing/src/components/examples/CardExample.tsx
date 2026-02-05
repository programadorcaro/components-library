import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  type CardProps,
} from '@les-ui/pixel';

export const CardExample = (props: CardProps) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>Game Stats</CardTitle>
    </CardHeader>
    <CardBody>
      <p style={{ fontSize: '14px', color: '#999' }}>
        Track your progress, achievements and rankings with real-time
        statistics.
      </p>
    </CardBody>
    <CardFooter>
      <span style={{ fontSize: '12px', color: '#666' }}>View stats →</span>
    </CardFooter>
  </Card>
);

CardExample.displayName = 'Card';
