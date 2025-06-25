/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address of the service. Defaults to the address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#address Service#address}
  */
  readonly address?: string;
  /**
  * The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#datacenter Service#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Specifies to disable the anti-entropy feature for this service's tags. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#enable_tag_override Service#enable_tag_override}
  */
  readonly enableTagOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#external Service#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map of arbitrary KV metadata linked to the service instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#meta Service#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * The name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * The namespace to create the service within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#namespace Service#namespace}
  */
  readonly namespace?: string;
  /**
  * The name of the node the to register the service on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#node Service#node}
  */
  readonly nodeAttribute: string;
  /**
  * The partition the service is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#partition Service#partition}
  */
  readonly partition?: string;
  /**
  * The port of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#port Service#port}
  */
  readonly port?: number;
  /**
  * If the service ID is not provided, it will be defaulted to the value of the `name` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#service_id Service#service_id}
  */
  readonly serviceId?: string;
  /**
  * A list of values that are opaque to Consul, but can be used to distinguish between services or nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#tags Service#tags}
  */
  readonly tags?: string[];
  /**
  * Object that configures how the service responds to DNS SRV requests based on the service's health status. You can specify one or more of the following states and configure an integer value indicating its weight: `passing`, `warning`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#weights Service#weights}
  */
  readonly weights?: { [key: string]: number };
  /**
  * check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#check Service#check}
  */
  readonly check?: ServiceCheck[] | cdktf.IResolvable;
}
export interface ServiceCheckHeader {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * The header's list of values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#value Service#value}
  */
  readonly value: string[];
}

export function serviceCheckHeaderToTerraform(struct?: ServiceCheckHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function serviceCheckHeaderToHclTerraform(struct?: ServiceCheckHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCheckHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServiceCheckHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCheckHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceCheckHeaderList extends cdktf.ComplexList {
  public internalValue? : ServiceCheckHeader[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceCheckHeaderOutputReference {
    return new ServiceCheckHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCheck {
  /**
  * An ID, *unique per agent*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#check_id Service#check_id}
  */
  readonly checkId: string;
  /**
  * The time after which the service is automatically deregistered when in the `critical` state. Defaults to `30s`. Setting to `0` will disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#deregister_critical_service_after Service#deregister_critical_service_after}
  */
  readonly deregisterCriticalServiceAfter?: string;
  /**
  * The HTTP endpoint to call for an HTTP check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#http Service#http}
  */
  readonly http?: string;
  /**
  * The interval to wait between each health-check invocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#interval Service#interval}
  */
  readonly interval: string;
  /**
  * The method to use for HTTP health-checks. Defaults to `GET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#method Service#method}
  */
  readonly method?: string;
  /**
  * The name of the health-check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * An opaque field meant to hold human readable text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#notes Service#notes}
  */
  readonly notes?: string;
  /**
  * The initial health-check status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#status Service#status}
  */
  readonly status?: string;
  /**
  * The TCP address and port to connect to for a TCP check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#tcp Service#tcp}
  */
  readonly tcp?: string;
  /**
  * Specifies a timeout for outgoing connections in the case of a HTTP or TCP check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#timeout Service#timeout}
  */
  readonly timeout: string;
  /**
  * Whether to deactivate certificate verification for HTTP health-checks. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#tls_skip_verify Service#tls_skip_verify}
  */
  readonly tlsSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#header Service#header}
  */
  readonly header?: ServiceCheckHeader[] | cdktf.IResolvable;
}

export function serviceCheckToTerraform(struct?: ServiceCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_id: cdktf.stringToTerraform(struct!.checkId),
    deregister_critical_service_after: cdktf.stringToTerraform(struct!.deregisterCriticalServiceAfter),
    http: cdktf.stringToTerraform(struct!.http),
    interval: cdktf.stringToTerraform(struct!.interval),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    status: cdktf.stringToTerraform(struct!.status),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    tls_skip_verify: cdktf.booleanToTerraform(struct!.tlsSkipVerify),
    header: cdktf.listMapper(serviceCheckHeaderToTerraform, true)(struct!.header),
  }
}


export function serviceCheckToHclTerraform(struct?: ServiceCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_id: {
      value: cdktf.stringToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deregister_critical_service_after: {
      value: cdktf.stringToHclTerraform(struct!.deregisterCriticalServiceAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.listMapperHcl(serviceCheckHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceCheckHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServiceCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._deregisterCriticalServiceAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deregisterCriticalServiceAfter = this._deregisterCriticalServiceAfter;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tlsSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSkipVerify = this._tlsSkipVerify;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkId = undefined;
      this._deregisterCriticalServiceAfter = undefined;
      this._http = undefined;
      this._interval = undefined;
      this._method = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._status = undefined;
      this._tcp = undefined;
      this._timeout = undefined;
      this._tlsSkipVerify = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkId = value.checkId;
      this._deregisterCriticalServiceAfter = value.deregisterCriticalServiceAfter;
      this._http = value.http;
      this._interval = value.interval;
      this._method = value.method;
      this._name = value.name;
      this._notes = value.notes;
      this._status = value.status;
      this._tcp = value.tcp;
      this._timeout = value.timeout;
      this._tlsSkipVerify = value.tlsSkipVerify;
      this._header.internalValue = value.header;
    }
  }

  // check_id - computed: false, optional: false, required: true
  private _checkId?: string; 
  public get checkId() {
    return this.getStringAttribute('check_id');
  }
  public set checkId(value: string) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // deregister_critical_service_after - computed: false, optional: true, required: false
  private _deregisterCriticalServiceAfter?: string; 
  public get deregisterCriticalServiceAfter() {
    return this.getStringAttribute('deregister_critical_service_after');
  }
  public set deregisterCriticalServiceAfter(value: string) {
    this._deregisterCriticalServiceAfter = value;
  }
  public resetDeregisterCriticalServiceAfter() {
    this._deregisterCriticalServiceAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterCriticalServiceAfterInput() {
    return this._deregisterCriticalServiceAfter;
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls_skip_verify - computed: false, optional: true, required: false
  private _tlsSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsSkipVerify() {
    return this.getBooleanAttribute('tls_skip_verify');
  }
  public set tlsSkipVerify(value: boolean | cdktf.IResolvable) {
    this._tlsSkipVerify = value;
  }
  public resetTlsSkipVerify() {
    this._tlsSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipVerifyInput() {
    return this._tlsSkipVerify;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ServiceCheckHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: ServiceCheckHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class ServiceCheckList extends cdktf.ComplexList {
  public internalValue? : ServiceCheck[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ServiceCheckOutputReference {
    return new ServiceCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service consul_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service consul_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_service',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.22.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._datacenter = config.datacenter;
    this._enableTagOverride = config.enableTagOverride;
    this._external = config.external;
    this._id = config.id;
    this._meta = config.meta;
    this._name = config.name;
    this._namespace = config.namespace;
    this._node = config.nodeAttribute;
    this._partition = config.partition;
    this._port = config.port;
    this._serviceId = config.serviceId;
    this._tags = config.tags;
    this._weights = config.weights;
    this._check.internalValue = config.check;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // enable_tag_override - computed: false, optional: true, required: false
  private _enableTagOverride?: boolean | cdktf.IResolvable; 
  public get enableTagOverride() {
    return this.getBooleanAttribute('enable_tag_override');
  }
  public set enableTagOverride(value: boolean | cdktf.IResolvable) {
    this._enableTagOverride = value;
  }
  public resetEnableTagOverride() {
    this._enableTagOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTagOverrideInput() {
    return this._enableTagOverride;
  }

  // external - computed: false, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // node - computed: false, optional: false, required: true
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // weights - computed: false, optional: true, required: false
  private _weights?: { [key: string]: number }; 
  public get weights() {
    return this.getNumberMapAttribute('weights');
  }
  public set weights(value: { [key: string]: number }) {
    this._weights = value;
  }
  public resetWeights() {
    this._weights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightsInput() {
    return this._weights;
  }

  // check - computed: false, optional: true, required: false
  private _check = new ServiceCheckList(this, "check", true);
  public get check() {
    return this._check;
  }
  public putCheck(value: ServiceCheck[] | cdktf.IResolvable) {
    this._check.internalValue = value;
  }
  public resetCheck() {
    this._check.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      enable_tag_override: cdktf.booleanToTerraform(this._enableTagOverride),
      external: cdktf.booleanToTerraform(this._external),
      id: cdktf.stringToTerraform(this._id),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      node: cdktf.stringToTerraform(this._node),
      partition: cdktf.stringToTerraform(this._partition),
      port: cdktf.numberToTerraform(this._port),
      service_id: cdktf.stringToTerraform(this._serviceId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      weights: cdktf.hashMapper(cdktf.numberToTerraform)(this._weights),
      check: cdktf.listMapper(serviceCheckToTerraform, true)(this._check.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_tag_override: {
        value: cdktf.booleanToHclTerraform(this._enableTagOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external: {
        value: cdktf.booleanToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._meta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node: {
        value: cdktf.stringToHclTerraform(this._node),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      weights: {
        value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(this._weights),
        isBlock: false,
        type: "map",
        storageClassType: "numberMap",
      },
      check: {
        value: cdktf.listMapperHcl(serviceCheckToHclTerraform, true)(this._check.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
