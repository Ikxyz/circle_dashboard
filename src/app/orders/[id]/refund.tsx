'use client'

import { Button } from 'src/components/button'
import { Checkbox, CheckboxField } from 'src/components/checkbox'
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from 'src/components/dialog'
import { Description, Field, FieldGroup, Label } from 'src/components/fieldset'
import { Input } from 'src/components/input'
import { Select } from 'src/components/select'
import { useState } from 'react'

export function RefundOrder({ amount, ...props }: { amount: string } & React.ComponentPropsWithoutRef<typeof Button>) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)} {...props} />
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Refund payment</DialogTitle>
        <DialogDescription>
          The refund will be reflected in the customer&apos;s bank account 2 to 3 business days after processing.
        </DialogDescription>
        <DialogBody>
          <FieldGroup>
            <Field>
              <Label>Amount</Label>
              <Input name="amount" defaultValue={amount} placeholder="0.00 ETH" autoFocus />
            </Field>
            <Field>
              <Label>Reason</Label>
              <Select name="reason" defaultValue="">
                <option value="" disabled>
                  Select a reason&hellip;
                </option>
                <option value="duplicate">Duplicate</option>
                <option value="fraudulent">Fraudulent</option>
                <option value="requested_by_customer">Requested by customer</option>
                <option value="other">Other</option>
              </Select>
            </Field>
            <CheckboxField>
              <Checkbox name="notify" />
              <Label>Notify customer</Label>
              <Description>An email notification will be sent to this customer.</Description>
            </CheckboxField>
          </FieldGroup>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
