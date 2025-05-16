"use client";
import { ChangeEvent } from 'react';
import { Button } from 'src/components/button';
import { Checkbox, CheckboxField } from 'src/components/checkbox';
import { Divider } from 'src/components/divider';
import { Label } from 'src/components/fieldset';
import { Heading, Subheading } from 'src/components/heading';
import { Input } from 'src/components/input';
import { Select } from 'src/components/select';
import { Text } from 'src/components/text';
import { Textarea } from 'src/components/textarea';
import CreateCircleForm from './components/CreateCircleForm';

// const isLoading = new Signal(false);

export default function CreateCirclePage() {
  // In a real app, you would get the wallet address from your wallet provider
  const address = "example-wallet-address";

  return (
    < CreateCircleForm address={address} />
  );
}
